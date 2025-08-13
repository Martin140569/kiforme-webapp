// ===== Helpers =====
const el = (id) => document.getElementById(id);
const fmt = (n, ccy = "EUR") => {
  if (n === null || n === undefined || isNaN(n)) return "–";
  try { return new Intl.NumberFormat("de-DE", { style: "currency", currency: ccy }).format(Number(n)); }
  catch { return `${Number(n).toFixed(2)} ${ccy}`; }
};

// ===== State (im Browser gespeichert) =====
const state = {
  mode: localStorage.getItem("ki-mode") || "Hybrid",
  risk: parseFloat(localStorage.getItem("risk") || "1.00"),
  currency: "EUR"
};
function saveState() {
  localStorage.setItem("ki-mode", state.mode);
  localStorage.setItem("risk", state.risk.toFixed(2));
}
function applyStateToUI() {
  el("ki-status").textContent = `KI-Modus: ${state.mode}`;
  el("risk-level").textContent = `${state.risk.toFixed(2)}%`;
}
applyStateToUI();

// ===== UI Controls =====
el("toggle-mode").addEventListener("click", () => {
  state.mode = state.mode === "Hybrid" ? "Vollautomatik" : "Hybrid";
  saveState(); applyStateToUI();
});
el("set-risk").addEventListener("click", () => {
  const v = prompt("Risiko in % (z. B. 1.00):", state.risk.toFixed(2));
  if (v === null) return;
  const num = Number(v);
  if (!isNaN(num) && num >= 0 && num <= 100) {
    state.risk = num; saveState(); applyStateToUI();
  } else alert("Ungültiger Wert.");
});
el("refresh-all").addEventListener("click", () => { loadAccountInfo(); loadPositions(); });
el("filter").addEventListener("input", () => applyFilter());

// ===== Daten laden =====
async function loadAccountInfo() {
  const status = el("account-status");
  status.textContent = "Lade Kontoinformationen…";
  try {
    const r = await fetch("/api/metaapi/account-info");
    const txt = await r.text();
    if (!r.ok) throw new Error(txt);
    const info = JSON.parse(txt);

    state.currency = info.currency || "EUR";
    el("balance").textContent = fmt(info.balance, state.currency);
    el("equity").textContent = fmt(info.equity, state.currency);
    el("freeMargin").textContent = fmt(info.freeMargin, state.currency);
    el("currency").textContent = info.currency || "–";
    el("leverage").textContent = info.leverage ? `${info.leverage}:1` : "–";
    el("server").textContent = info.server || info.broker || "–";
    status.textContent = "Kontoinformationen aktualisiert.";
  } catch (e) {
    console.error(e);
    status.textContent = "⚠️ Fehler beim Laden der Kontoinformationen.";
  }
}

async function loadPositions() {
  const body = el("positions-body");
  const status = el("positions-status");
  body.innerHTML = `<tr><td colspan="9" class="muted">Lade…</td></tr>`;
  status.textContent = "Lade offene Positionen…";
  try {
    const r = await fetch("/api/metaapi/positions");
    const txt = await r.text();
    if (!r.ok) throw new Error(txt);
    const positions = JSON.parse(txt);

    if (!Array.isArray(positions) || positions.length === 0) {
      body.innerHTML = `<tr><td colspan="9" class="muted">Keine offenen Positionen.</td></tr>`;
      status.textContent = "Keine offenen Positionen.";
      return;
    }

    body.innerHTML = positions.map(p => {
      const type = (p.type || "").replace("POSITION_TYPE_", "");
      const profit = (typeof p.profit === "number") ? p.profit : null;
      return `
        <tr data-row>
          <td>${p.id || "-"}</td>
          <td>${p.symbol || "-"}</td>
          <td>${type || "-"}</td>
          <td>${p.volume ?? "-"}</td>
          <td>${p.openPrice ?? "-"}</td>
          <td>${p.stopLoss ?? "-"}</td>
          <td>${p.takeProfit ?? "-"}</td>
          <td>${profit !== null ? fmt(profit, state.currency) : "-"}</td>
          <td><button class="btn btn-danger" onclick="closePosition('${p.id}')">❌ Schließen</button></td>
        </tr>
      `;
    }).join("");

    status.textContent = `Offene Positionen: ${positions.length}`;
    applyFilter();
  } catch (e) {
    console.error(e);
    body.innerHTML = `<tr><td colspan="9" class="muted">⚠️ Fehler beim Laden.</td></tr>`;
    status.textContent = "⚠️ Fehler beim Laden der Positionen.";
  }
}

function applyFilter() {
  const q = (el("filter").value || "").toLowerCase();
  const rows = document.querySelectorAll("#positions-body tr[data-row]");
  rows.forEach(r => r.style.display = r.textContent.toLowerCase().includes(q) ? "" : "none");
}

async function closePosition(positionId) {
  if (!confirm(`Position ${positionId} schließen?`)) return;
  const status = el("positions-status");
  try {
    const r = await fetch("/api/metaapi/trade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ actionType: "POSITION_CLOSE_ID", positionId })
    });
    const txt = await r.text();
    const data = JSON.parse(txt || "{}");
    if (!r.ok) throw new Error(data?.error || txt || r.statusText);

    if (data.stringCode === "TRADE_RETCODE_DONE") {
      status.textContent = `✅ Position ${positionId} geschlossen.`;
      await loadPositions();
    } else {
      status.textContent = `⚠️ Antwort: ${data.stringCode || data.message || "Unbekannt"}`;
    }
  } catch (e) {
    console.error(e);
    status.textContent = `❌ Schließen fehlgeschlagen: ${e.message}`;
  }
}

// Initial laden
loadAccountInfo();
loadPositions();

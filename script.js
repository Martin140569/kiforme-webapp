// script.js
const API = "/api/metaapi";

const el = {
  status: () => document.getElementById("status"),
  balance: () => document.getElementById("balance"),
  modeLabel: () => document.getElementById("modeLabel"),
  riskInput: () => document.getElementById("riskInput"),
  toggleModeBtn: () => document.getElementById("toggleMode"),
  saveRiskBtn: () => document.getElementById("saveRisk"),
  tradeBody: () => document.getElementById("tradeBody"),
  refreshBtn: () => document.getElementById("refreshBtn"),
  filterInput: () => document.getElementById("filterInput")
};

async function apiGet() {
  const res = await fetch(API);
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || `HTTP ${res.status}`);
  }
  return res.json();
}

async function apiPost(payload) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || `HTTP ${res.status}`);
  }
  return res.json();
}

function renderTrades(trades) {
  const tbody = el.tradeBody();
  tbody.innerHTML = "";
  if (!trades || trades.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8">Keine offenen Trades</td></tr>`;
    return;
  }
  const filter = (el.filterInput().value || "").toLowerCase();
  trades.forEach(t => {
    const line = `${t.symbol} ${t.trader}`.toLowerCase();
    if (filter && !line.includes(filter)) return;
    const tr = document.createElement("tr");
    tr.className = (t.side || "").toLowerCase().includes("buy") ? "buy" : "sell";
    tr.innerHTML = `
      <td>${t.symbol}</td>
      <td>${t.side || "-"}</td>
      <td>${t.volume}</td>
      <td>${t.sl ?? "-"}</td>
      <td>${t.tp ?? "-"}</td>
      <td>${Number(t.profit || 0).toFixed(2)}</td>
      <td>${t.trader ?? "-"}</td>
      <td><button class="btn small close" onclick="closeTrade('${t.id}')">Schließen</button></td>
    `;
    tbody.appendChild(tr);
  });
}

async function fetchAll() {
  try {
    el.status().textContent = "🔄 Lade Live‑Daten…";
    const data = await apiGet();
    el.balance().textContent = data.account && data.account.balance !== undefined
      ? `${Number(data.account.balance).toFixed(2)} ${data.account.currency||""}`
      : "n/a";
    const settings = data.settings || { mode: "Hybrid", risk: 1 };
    el.modeLabel().textContent = settings.mode;
    el.riskInput().value = settings.risk;
    renderTrades(data.trades || []);
    el.status().textContent = "✅ Live";
  } catch (err) {
    console.error("fetchAll error:", err);
    el.status().textContent = "❌ Fehler beim Laden";
    el.tradeBody().innerHTML = `<tr><td colspan="8">Fehler beim Laden der Trades</td></tr>`;
  }
}

async function toggleMode() {
  try {
    const current = el.modeLabel().textContent;
    const next = current === "Hybrid" ? "Vollautomatik" : "Hybrid";
    const updated = await apiPost({ mode: next });
    el.modeLabel().textContent = updated.mode || next;
  } catch (err) {
    console.error("toggleMode err:", err);
    alert("Fehler beim Umschalten");
  }
}

async function saveRisk() {
  try {
    const val = parseFloat(el.riskInput().value);
    if (isNaN(val) || val <= 0) return alert("Bitte gültiges Risiko eingeben");
    const updated = await apiPost({ risk: val });
    el.riskInput().value = updated.risk;
    alert("Risiko gespeichert");
  } catch (err) {
    console.error("saveRisk err:", err);
    alert("Fehler beim Speichern");
  }
}

async function closeTrade(tradeId) {
  if (!confirm(`Trade ${tradeId} wirklich schließen?`)) return;
  try {
    el.status().textContent = "⏳ Schließe Trade…";
    const result = await apiPost({ action: "close", tradeId });
    console.log("close result:", result);
    await fetchAll();
    alert("Trade geschlossen (siehe Logs)");
  } catch (err) {
    console.error("closeTrade err:", err);
    alert("Fehler beim Schließen des Trades");
  }
}

// Attach global for button calls
window.closeTrade = closeTrade;

el.toggleModeBtn().addEventListener("click", toggleMode);
el.saveRiskBtn().addEventListener("click", saveRisk);
el.refreshBtn().addEventListener("click", fetchAll);
el.filterInput().addEventListener("input", fetchAll);

// Start polling
fetchAll();
setInterval(fetchAll, 10000);

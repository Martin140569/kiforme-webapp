// script.js
const API = "/api/metaapi";

const el = {
  balance: () => document.getElementById("balance"),
  tradeBody: () => document.getElementById("tradeBody"),
  modeLabel: () => document.getElementById("modeLabel"),
  toggleModeBtn: () => document.getElementById("toggleMode"),
  riskInput: () => document.getElementById("riskInput"),
  saveRiskBtn: () => document.getElementById("saveRisk"),
  refreshBtn: () => document.getElementById("refresh")
};

async function fetchAll() {
  try {
    const res = await fetch(API);
    if (!res.ok) {
      const t = await res.text();
      throw new Error(t || `HTTP ${res.status}`);
    }
    const data = await res.json();
    // account
    const acc = data.account || {};
    el.balance().textContent = acc.balance !== undefined ? `${Number(acc.balance).toFixed(2)} ${acc.currency||""}` : "—";
    // settings
    const settings = data.settings || { mode: "Hybrid", risk: 1 };
    el.modeLabel().textContent = settings.mode;
    el.riskInput().value = settings.risk;

    // trades
    const trades = data.trades || [];
    renderTrades(trades);
  } catch (err) {
    console.error("Fetch error:", err);
    el.balance().textContent = "Fehler";
    el.tradeBody().innerHTML = `<tr><td colspan="8">Fehler beim Laden der Trades</td></tr>`;
  }
}

function renderTrades(trades) {
  const tbody = el.tradeBody();
  tbody.innerHTML = "";
  if (!trades || trades.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8">Keine offenen Trades</td></tr>`;
    return;
  }
  trades.forEach(t => {
    const sideClass = (t.side || t.type || "").toLowerCase().includes("buy") ? "buy" : "sell";
    const tr = document.createElement("tr");
    tr.className = sideClass;
    tr.innerHTML = `
      <td>${t.symbol}</td>
      <td>${t.side || t.type || "-"}</td>
      <td>${t.volume}</td>
      <td>${t.sl ?? "-"}</td>
      <td>${t.tp ?? "-"}</td>
      <td>${Number(t.profit || 0).toFixed(2)}</td>
      <td>${t.trader || "-"}</td>
      <td><button class="close" onclick="closeTrade('${t.id}')">Schließen</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// closeTrade is a placeholder (needs backend implementation)
window.closeTrade = function(id) {
  alert(`Trade ${id} schließen: Backend-Endpoint erforderlich (nicht implementiert)`);
};

// toggle mode / save risk => POST to API
async function toggleMode() {
  try {
    const current = el.modeLabel().textContent;
    const next = current === "Hybrid" ? "Vollautomatik" : "Hybrid";
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: next })
    });
    if (!res.ok) throw new Error("Could not update mode");
    const data = await res.json();
    el.modeLabel().textContent = data.mode;
  } catch (err) {
    console.error(err);
    alert("Fehler beim Ändern des Modus");
  }
}

async function saveRisk() {
  try {
    const val = parseFloat(el.riskInput().value);
    if (isNaN(val) || val <= 0) return alert("Bitte gültiges Risiko eingeben");
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ risk: val })
    });
    if (!res.ok) throw new Error("Could not update risk");
    const data = await res.json();
    el.riskInput().value = data.risk;
    alert("Risiko gespeichert");
  } catch (err) {
    console.error(err);
    alert("Fehler beim Speichern des Risikos");
  }
}

el.toggleModeBtn().addEventListener("click", toggleMode);
el.saveRiskBtn().addEventListener("click", saveRisk);
el.refreshBtn().addEventListener("click", fetchAll);

// start & poll
fetchAll();
setInterval(fetchAll, 10000); // alle 10 s aktualisieren

let mode = "Hybrid";

window.addEventListener("DOMContentLoaded", () => {
  fetchLiveData();
  document.getElementById("ki-status").innerText = `KI-Modus: ${mode}`;
});

function toggleMode() {
  mode = (mode === "Hybrid") ? "Vollautomatik" : "Hybrid";
  document.getElementById("ki-status").innerText = `KI-Modus: ${mode}`;
  console.log("Modus geändert:", mode);
}

function setRiskLevel() {
  const level = prompt("Gib das Risiko-Level in % ein (z. B. 1.5):");
  if (level !== null) {
    alert(`Risiko auf ${level}% gesetzt.`);
    // TODO: Sende Risiko an Backend/API
  }
}

function fetchLiveData() {
  document.getElementById("balance").innerText = "10.450,12 €";
  const trades = [
    {symbol: "EURUSD", dir: "Buy", lot: 0.2, sl: 1.083, tp: 1.092, trader: "KI", plattform: "AvaTrade"},
    {symbol: "BTCUSD", dir: "Sell", lot: 0.1, sl: 61000, tp: 59000, trader: "AlphaBot", plattform: "AvaTrade"}
  ];
  renderTrades(trades);
}

function renderTrades(trades) {
  const body = document.getElementById("tradeTableBody");
  body.innerHTML = "";
  trades.forEach(t => {
    const row = document.createElement("tr");
    row.className = t.dir.toLowerCase();
    row.innerHTML = `
      <td>${t.symbol}</td>
      <td>${t.dir}</td>
      <td>${t.lot}</td>
      <td>${t.sl}</td>
      <td>${t.tp}</td>
      <td>${t.trader}</td>
      <td>${t.plattform}</td>
      <td><button onclick="closeTrade('${t.symbol}')">❌ Schließen</button></td>
    `;
    body.appendChild(row);
  });
}

function closeTrade(symbol) {
  alert(`Trade ${symbol} wird geschlossen…`);
  // TODO: Backend-Call zur Trade-Schließung
}

function applyFilter() {
  const filter = document.getElementById("traderFilter").value.toLowerCase();
  const rows = document.querySelectorAll("#tradeTableBody tr");
  rows.forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
  });
}

function downloadPDFReport() {
  const today = new Date().toISOString().slice(0,10);
  const dummyData = `
    Tagesreport – ${today}
    =========================
    Kontostand: 10.450,12 €
    KI-Modus: ${mode}
    
    Offene Trades:
    - EURUSD (Buy, 0.2 Lot) – Trader: KI
    - BTCUSD (Sell, 0.1 Lot) – Trader: AlphaBot
  `;

  const blob = new Blob([dummyData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `KI-Report_${today}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

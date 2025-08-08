let mode = "Hybrid";

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
    console.log("Risiko-Level gesetzt auf:", level);
  }
}

function fetchLiveData() {
  console.log("Live-Daten werden geladen...");
  
  // 👉 Hier kannst du später deine MetaAPI fetch()-Logik einsetzen
  // Beispiel: fetch('/api/positions').then(...)

  // Bis dahin: Simulierte Live-Daten
  document.getElementById("balance").innerText = "10.450,12 €";

  const trades = [
    {
      symbol: "EURUSD",
      dir: "Buy",
      lot: 0.2,
      sl: 1.083,
      tp: 1.092,
      trader: "KI",
      plattform: "AvaTrade"
    },
    {
      symbol: "BTCUSD",
      dir: "Sell",
      lot: 0.1,
      sl: 61000,
      tp: 59000,
      trader: "AlphaBot",
      plattform: "AvaTrade"
    }
  ];

  renderTrades(trades);
}

function renderTrades(trades) {
  const body = document.getElementById("tradeTableBody");
  body.innerHTML = "";

  trades.forEach(t => {
    const row = document.createElement("tr");
    row.className = t.dir.toLowerCase(); // für CSS: .buy, .sell
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

  console.log("Trades aktualisiert:", trades.length);
}

function closeTrade(symbol) {
  alert(`Trade ${symbol} wird geschlossen…`);
  // TODO: Backend/API-Call zur Schließung
  console.log("Trade-Schließung ausgelöst für:", symbol);
}

function applyFilter() {
  const filter = document.getElementById("traderFilter").value.toLowerCase();
  const rows = document.querySelectorAll("#tradeTableBody tr");

  rows.forEach(row => {
    const match = row.innerText.toLowerCase().includes(filter);
    row.style.display = match ? "" : "none";
  });

  console.log("Filter angewendet:", filter);
}

// 🟢 Initialisierung beim Laden der Seite
window.addEventListener("DOMContentLoaded", () => {
  console.log("📲 KI Dashboard gestartet");
  fetchLiveData();
});

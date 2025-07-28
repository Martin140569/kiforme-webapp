const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzY...';

let kiMode = "Hybrid";
function toggleKIStatus() {
  kiMode = kiMode === "Hybrid" ? "Vollautomatik" : "Hybrid";
  document.getElementById("kiStatus").innerText = "KI-Modus: " + kiMode;
}

function setRiskLevel(value) {
  alert("Risikoniveau auf " + value + "% gesetzt.");
  // Hier später API Call einbauen
}

function filterTrades() {
  const filter = document.getElementById("filterInput").value.toLowerCase();
  const rows = document.querySelectorAll("#tradeRows tr");
  rows.forEach(row => {
    const traderCell = row.querySelector("td:nth-child(6)").innerText.toLowerCase();
    row.style.display = traderCell.includes(filter) ? "" : "none";
  });
}

async function loadTrades() {
  // Real API-Anbindung folgt
  const trades = [
    { symbol: "EURUSD", lot: 0.1, type: "Buy", sl: 1.0900, tp: 1.1100, trader: "KI" },
    { symbol: "XAUUSD", lot: 0.2, type: "Sell", sl: 2000, tp: 1900, trader: "CopyTrader_Mike" }
  ];
  const tbody = document.getElementById("tradeRows");
  tbody.innerHTML = "";
  trades.forEach(t => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${t.symbol}</td>
      <td>${t.lot}</td>
      <td>${t.type}</td>
      <td>${t.sl}</td>
      <td>${t.tp}</td>
      <td>${t.trader}</td>
      <td><button onclick="closeTrade('${t.symbol}')">❌ Schließen</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function closeTrade(symbol) {
  alert("Trade für " + symbol + " wird geschlossen...");
}

window.onload = loadTrades;

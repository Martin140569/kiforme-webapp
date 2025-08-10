document.addEventListener("DOMContentLoaded", () => {
  const modeStatus = document.getElementById("modeStatus");
  const toggleModeBtn = document.getElementById("toggleMode");
  const balanceEl = document.getElementById("balance");
  const tradesTable = document.getElementById("tradesTable");
  const setRiskBtn = document.getElementById("setRisk");
  const riskInput = document.getElementById("riskInput");

  let currentMode = "Hybrid";

  // Modus umschalten
  toggleModeBtn.addEventListener("click", () => {
    currentMode = currentMode === "Hybrid" ? "Vollautomatik" : "Hybrid";
    modeStatus.textContent = `Modus: ${currentMode}`;
  });

  // Risiko setzen
  setRiskBtn.addEventListener("click", () => {
    const riskValue = riskInput.value;
    if (riskValue >= 1 && riskValue <= 100) {
      alert(`Risiko auf ${riskValue}% gesetzt (nur lokal gespeichert)`);
    } else {
      alert("Bitte gültigen Wert zwischen 1 und 100 eingeben");
    }
  });

  // Kontostand laden
  fetch("/api/metaapi")
    .then(res => res.json())
    .then(data => {
      balanceEl.textContent = data.balance ? `${data.balance} USD` : "Fehler";
      tradesTable.innerHTML = "";

      if (data.trades && data.trades.length > 0) {
        data.trades.forEach(t => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${t.symbol}</td>
            <td>${t.lots}</td>
            <td>${t.type}</td>
            <td>${t.sl || "-"}</td>
            <td>${t.tp || "-"}</td>
            <td><button onclick="closeTrade('${t.id}')">❌ Schließen</button></td>
          `;
          tradesTable.appendChild(row);
        });
      } else {
        tradesTable.innerHTML = `<tr><td colspan="6">Keine offenen Trades</td></tr>`;
      }
    })
    .catch(err => {
      console.error(err);
      balanceEl.textContent = "Fehler beim Laden";
    });
});

// Trade schließen (Platzhalter)
function closeTrade(id) {
  alert(`Trade ${id} würde jetzt geschlossen werden (Backend nötig)`);
}

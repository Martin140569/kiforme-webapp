document.addEventListener("DOMContentLoaded", async () => {
  const balanceEl = document.getElementById("balance");
  const tradesTableBody = document.querySelector("#tradesTable tbody");
  const modeToggle = document.getElementById("modeToggle");
  const riskInput = document.getElementById("riskInput");

  let hybridMode = true;

  async function loadAccountData() {
    try {
      const res = await fetch("/api/metaapi");
      const data = await res.json();
      if (data.error) {
        balanceEl.textContent = `Fehler: ${data.error}`;
        return;
      }
      balanceEl.textContent = `${data.balance.toFixed(2)} USD`;

      tradesTableBody.innerHTML = "";
      data.trades.forEach(trade => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${trade.symbol}</td>
          <td>${trade.volume}</td>
          <td>${trade.type}</td>
          <td>${trade.sl}</td>
          <td>${trade.tp}</td>
          <td>${trade.trader}</td>
          <td><button onclick="closeTrade('${trade.id}')">Schließen</button></td>
        `;
        tradesTableBody.appendChild(row);
      });
    } catch (err) {
      balanceEl.textContent = "API-Fehler";
    }
  }

  window.closeTrade = async function(tradeId) {
    alert(`Trade ${tradeId} würde hier geschlossen werden`);
  };

  modeToggle.addEventListener("click", () => {
    hybridMode = !hybridMode;
    modeToggle.textContent = `Modus: ${hybridMode ? "Hybrid" : "Vollautomatik"}`;
  });

  riskInput.addEventListener("change", () => {
    alert(`Risiko auf ${riskInput.value}% gesetzt`);
  });

  loadAccountData();
  setInterval(loadAccountData, 10000);
});

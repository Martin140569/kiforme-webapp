document.addEventListener("DOMContentLoaded", () => {
  const balanceEl = document.getElementById("balance");
  const modeEl = document.getElementById("mode");
  const toggleBtn = document.getElementById("toggleMode");
  const riskInput = document.getElementById("riskInput");
  const saveRiskBtn = document.getElementById("saveRisk");

  let mode = "Hybrid";

  async function loadBalance() {
    try {
      const res = await fetch("/api/metaapi");
      const data = await res.json();
      if (data.error) {
        balanceEl.textContent = "Fehler";
        console.error(data.error);
      } else {
        balanceEl.textContent = data.balance || "Keine Daten";
      }
    } catch (err) {
      console.error(err);
      balanceEl.textContent = "Fehler";
    }
  }

  toggleBtn.addEventListener("click", () => {
    mode = mode === "Hybrid" ? "Vollautomatik" : "Hybrid";
    modeEl.textContent = mode;
  });

  saveRiskBtn.addEventListener("click", () => {
    alert(`Risiko auf ${riskInput.value}% gesetzt.`);
  });

  loadBalance();
});

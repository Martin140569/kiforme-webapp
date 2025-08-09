document.addEventListener("DOMContentLoaded", () => {
  const balanceEl = document.getElementById("balance");
  const kiStatusEl = document.getElementById("kiStatus");
  const toggleModeBtn = document.getElementById("toggleMode");

  let kiMode = "Hybridmodus";

  async function fetchBalance() {
    try {
      const res = await fetch("/api/metaapi");
      const data = await res.json();

      if (data.error) {
        balanceEl.textContent = `❌ Fehler: ${data.error}`;
      } else {
        balanceEl.textContent = `${data.balance} USD`;
      }
    } catch (err) {
      balanceEl.textContent = "❌ API-Fehler";
    }
  }

  toggleModeBtn.addEventListener("click", () => {
    kiMode = kiMode === "Hybridmodus" ? "Vollautomatik" : "Hybridmodus";
    kiStatusEl.textContent = kiMode;
  });

  fetchBalance();
});

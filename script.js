async function getBalance() {
  const balanceDiv = document.getElementById("balance");
  balanceDiv.textContent = "⏳ Lade...";

  try {
    const res = await fetch("/api/METAAPI");
    const data = await res.json();

    if (res.ok) {
      balanceDiv.textContent = `${data.balance} ${data.currency}`;
    } else {
      balanceDiv.textContent = `❌ Fehler: ${data.error}`;
    }
  } catch (err) {
    balanceDiv.textContent = `⚠️ Fehler: ${err.message}`;
  }
}

document.getElementById("refreshBalance").addEventListener("click", getBalance);

// Beim Laden der Seite direkt ausführen
getBalance();

async function fetchBalance() {
  const res = await fetch("/api/metaapi/account-info");
  const data = await res.json();
  document.getElementById("balance").textContent =
    `Kontostand: ${data.balance} | Equity: ${data.equity}`;
}

async function fetchPositions() {
  const res = await fetch("/api/metaapi/positions");
  const data = await res.json();

  const table = document.getElementById("positionsTable");
  table.innerHTML = "";

  if (!data.length) {
    table.innerHTML = "<tr><td colspan='7'>Keine offenen Positionen</td></tr>";
    return;
  }

  data.forEach(pos => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pos.symbol}</td>
      <td>${pos.volume}</td>
      <td>${pos.type}</td>
      <td>${pos.sl || "-"}</td>
      <td>${pos.tp || "-"}</td>
      <td>${pos.comment || "-"}</td>
      <td><button onclick="closeTrade('${pos.id}')">Schließen</button></td>
    `;
    table.appendChild(row);
  });
}

async function closeTrade(id) {
  await fetch("/api/metaapi/trade", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ positionId: id })
  });
  fetchPositions();
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBalance();
  fetchPositions();
});

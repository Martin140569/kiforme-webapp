// script.js
async function loadPositions() {
  try {
    const res = await fetch('/api/metaapi');
    const positions = await res.json();

    const table = document.getElementById('positions-table');
    table.innerHTML = '';

    positions.forEach(pos => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${pos.symbol}</td>
        <td>${pos.type}</td>
        <td>${pos.volume}</td>
        <td>${pos.unrealizedProfit}</td>
      `;
      table.appendChild(row);
    });
  } catch (err) {
    console.error('Fehler beim Laden der Positionen:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadPositions);

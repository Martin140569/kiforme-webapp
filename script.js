// Deine API-URL (Vercel Endpoint) – unbedingt anpassen!
const API_URL = "https://kiforme.vercel.app/api/metaapi";

// HTML-Elemente
const balanceEl = document.getElementById("balance");
const tradesTable = document.getElementById("trades-table");
const statusEl = document.getElementById("status");

// Daten alle 5 Sekunden aktualisieren
async function fetchData() {
    try {
        statusEl.textContent = "🔄 Aktualisiere Daten...";
        
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP Fehler: ${res.status}`);

        const data = await res.json();

        // Kontostand anzeigen
        balanceEl.textContent = `${data.balance.toFixed(2)} USD`;

        // Trades-Tabelle leeren
        tradesTable.innerHTML = "";

        // Trades einfügen
        if (data.positions && data.positions.length > 0) {
            data.positions.forEach(pos => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${pos.symbol}</td>
                    <td>${pos.type}</td>
                    <td>${pos.volume}</td>
                    <td>${pos.unrealizedProfit.toFixed(2)} USD</td>
                    <td>${pos.openTime}</td>
                `;
                tradesTable.appendChild(row);
            });
        } else {
            const row = document.createElement("tr");
            row.innerHTML = `<td colspan="5">Keine offenen Trades</td>`;
            tradesTable.appendChild(row);
        }

        statusEl.textContent = "✅ Live-Daten geladen";
    } catch (error) {
        console.error("Fehler beim Laden:", error);
        statusEl.textContent = "❌ Fehler beim Laden der Daten";
    }
}

// Sofort starten & alle 5 Sekunden neu laden
fetchData();
setInterval(fetchData, 5000);

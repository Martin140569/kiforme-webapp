document.addEventListener('DOMContentLoaded', async () => {
  const accountId = 71e5fedf-0a6f-47c3-a1d7-fcbd423576c8;
  const token = eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzYTFmMGRmNjBjM2UwNWIzZjg2NGE1NjQ5NTFkYTNkZSIsImFjY2Vzc1J1bGVzIjpbeyJpZCI6InRyYWRpbmctYWNjb3VudC1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJtZXRhYXBpLXJwYy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFhcGktcmVhbC10aW1lLXN0cmVhbWluZy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJyaXNrLW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfV0sImlnbm9yZVJhdGVMaW1pdHMiOmZhbHNlLCJ0b2tlbklkIjoiMjAyMTAyMTMiLCJpbXBlcnNvbmF0ZWQiOmZhbHNlLCJyZWFsVXNlcklkIjoiM2ExZjBkZjYwYzNlMDViM2Y4NjRhNTY0OTUxZGEzZGUiLCJpYXQiOjE3NTQ2Nzc2MDcsImV4cCI6MTc2MjQ1MzYwN30.QUjlHpa-1tsPrKLbrSJtAFt5VOuJbWHkgSXZND3swzP5WCoYAy_fJIrnni2q0nfpvwzGlDmij0zT2VosQsKXr9rsGpfW-ahlmzkkwbZtpn17oEZDLe_O1RLHDjaQCmw07x4Y6FcGp7gXpREbfD-0RGRFRbHJl6MfOUHUqJQceydH_tG4Ow9FjNyXHu90_JgapL7JEmqK3KiFn7O3KrEr9sPHW6vFuyDWqSXDlx5Uo4XYGzETz2w9aTPoBeOuz5n5Ol2AQz-HYHS9n03DS2HUjOUZAAryc6swFCJP3_bCp1yOywCBxgi8uVf9ww0cnhkPo0ELkA85riWOPW3CeWv6uC3r5eEHCLdGyVIAQS30r0IH3M4LsCfI9bY_NgMXBtwYZO7OWXdKIhGfr2qAyCiAaHRlpep6Gsf5C4Bcl5ETAdHL71FYM-hrRnw8Z-GxpYvKaQ2GQDYnpRdODm_FKPKkWX1yNR2DvpB4Ae-Vc_o7aqKW8IDCS5ghTP1tVPS9e-q3VpBIvnGGmI33DM_oNZ37UDzeGXDh12Teenu6L4ia0HMTRWniHnrN9VF8a8s461STcZAvwAUNQDvPnS0MHEJjPHLYimjvVMyESRXe5E3po9Tpm9PCLhpQ6Ebgbe30INAAPrB-Y-h-UMRmrRQsVphdqldVjFl60pMtoEIE6Rnepw0;
  const balanceElement = document.getElementById('balance');
  const tradesContainer = document.getElementById('trades-container');
  const statusElement = document.getElementById('status');
  const modeSwitch = document.getElementById('mode-switch');
  const riskInput = document.getElementById('risk-input');
  const filterInput = document.getElementById('filter-input');

  let tradingMode = 'Hybrid'; // Startmodus

  // KI-Modus umschalten
  modeSwitch.addEventListener('click', () => {
    tradingMode = tradingMode === 'Hybrid' ? 'Vollautomatik' : 'Hybrid';
    statusElement.textContent = `KI Modus: ${tradingMode}`;
  });

  // Risk-Input Change (Placeholder)
  riskInput.addEventListener('change', () => {
    alert(`Risikowert geändert auf: ${riskInput.value} % (nur Platzhalter)`);
  });

  // Fetch Kontostand und offene Trades
  async function fetchData() {
    try {
      const response = await fetch(`https://mt-client-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/metrics`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      const balance = data.balance ? parseFloat(data.balance).toFixed(2) : '0.00';
      balanceElement.textContent = `${balance} USD`;

      await fetchTrades();
    } catch (error) {
      console.error('Fehler beim Laden des Kontostands:', error);
      balanceElement.textContent = 'Fehler beim Abruf';
    }
  }

  async function fetchTrades() {
    try {
      const response = await fetch(`https://mt-client-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}/open-trades`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const trades = await response.json();
      tradesContainer.innerHTML = ''; // Clear existing

      const filter = filterInput.value.toLowerCase();

      trades
        .filter(trade => !filter || (trade.symbol && trade.symbol.toLowerCase().includes(filter)))
        .forEach(trade => {
          const tradeEl = document.createElement('div');
          tradeEl.className = 'trade';
          tradeEl.innerHTML = `
            <strong>${trade.symbol}</strong> – ${trade.type.toUpperCase()}<br>
            Lot: ${trade.volume}, SL: ${trade.sl || '-'}, TP: ${trade.tp || '-'}<br>
            <button onclick="closeTrade('${trade.id}')">❌ Schließen</button>
          `;
          tradesContainer.appendChild(tradeEl);
        });

    } catch (error) {
      console.error('Fehler beim Laden der Trades:', error);
      tradesContainer.innerHTML = 'Fehler beim Abruf';
    }
  }

  // Trade schließen (nur Platzhalter)
  window.closeTrade = async (tradeId) => {
    alert(`Trade ${tradeId} wird geschlossen (Platzhalter).`);
    // Backend-Integration hier ergänzen
  };

  // Filter live anwenden
  filterInput.addEventListener('input', fetchTrades);

  // Initial-Status anzeigen
  statusElement.textContent = `KI Modus: ${tradingMode}`;

  // Live-Daten laden
  fetchData();

  // Regelmäßige Aktualisierung
  setInterval(fetchData, 60000); // alle 60 Sekunden
});

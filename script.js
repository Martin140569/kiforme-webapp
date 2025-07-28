const token = eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzYTFmMGRmNjBjM2UwNWIzZjg2NGE1NjQ5NTFkYTNkZSIsImFjY2Vzc1J1bGVzIjpbeyJpZCI6InRyYWRpbmctYWNjb3VudC1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJtZXRhYXBpLXJwYy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFhcGktcmVhbC10aW1lLXN0cmVhbWluZy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJyaXNrLW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfV0sImlnbm9yZVJhdGVMaW1pdHMiOmZhbHNlLCJ0b2tlbklkIjoiMjAyMTAyMTMiLCJpbXBlcnNvbmF0ZWQiOmZhbHNlLCJyZWFsVXNlcklkIjoiM2ExZjBkZjYwYzNlMDViM2Y4NjRhNTY0OTUxZGEzZGUiLCJpYXQiOjE3NTM2NTkwNzAsImV4cCI6MTc2MTQzNTA3MH0.IakA-DW2ajuz6w47r3hvtdK_rBRGf-Bz_UKFzzPdfhZJFEWfbLvX0i7QsSibOdVqy3V_wujj8K3omMBy-_Ti8Lr6HL58OycOH8VZIT9LdCwGjGWl_nK-NuIF6YkBzGbjp-KPL1PxxoLJ1mtqcgbfhBHeNghYkwcBgDcn9yhU1JOAVMGddd8ewvKWQIMzkveNeYuv2xBq7p8XF1j6PwloT9y0KwWl1K0qTQxrsWNrQKye1YVVSs-8A3tXGXsUHmbMahdCTIJW0X-9G7SgWeeWY-vnH5stQgUSy4uX5AX8Ia_lf3aZM0MAhQGM2a9NbTlZz7MDLBBU2RAnfzJkbGjUnwdLWT7-jqAiTuouz-Ce-2R9DZYIG8ZyjWQFvDUfLTyZrW0SYisEBMpwzCpm7AyznUZJ5TqJHp4PW3Oq4n0mzBuO4Kz_KwJfHo6uHk80RTpg7as22k8jKN1gpULmD2LwKKbLXuqENIDiZabH9lHkN-yocCmhRLeR_V4cbLJfEHo_65hcSJB09kKSJLkjGoPkTd0kOnnQuRKvmD_LmKDXHNzrdEgKNjEjEQumR_Nbkk4m20c22ywDW7_GcXPVMmGZ3iX9yYAkCiVM6oxdrYRmE3zZkpSSkGCbHk0sxaMrswcvWiJTEEJWaxJEmldEBpzfRS7tJvMdsrImZtuu5ExXp0E;

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

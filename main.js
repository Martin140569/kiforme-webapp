const METAAPI_TOKEN = eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzYTFmMGRmNjBjM2UwNWIzZjg2NGE1NjQ5NTFkYTNkZSIsImFjY2Vzc1J1bGVzIjpbeyJpZCI6InRyYWRpbmctYWNjb3VudC1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJtZXRhYXBpLXJwYy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFhcGktcmVhbC10aW1lLXN0cmVhbWluZy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJyaXNrLW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfV0sImlnbm9yZVJhdGVMaW1pdHMiOmZhbHNlLCJ0b2tlbklkIjoiMjAyMTAyMTMiLCJpbXBlcnNvbmF0ZWQiOmZhbHNlLCJyZWFsVXNlcklkIjoiM2ExZjBkZjYwYzNlMDViM2Y4NjRhNTY0OTUxZGEzZGUiLCJpYXQiOjE3NTM2NTkwNzAsImV4cCI6MTc2MTQzNTA3MH0.IakA-DW2ajuz6w47r3hvtdK_rBRGf-Bz_UKFzzPdfhZJFEWfbLvX0i7QsSibOdVqy3V_wujj8K3omMBy-_Ti8Lr6HL58OycOH8VZIT9LdCwGjGWl_nK-NuIF6YkBzGbjp-KPL1PxxoLJ1mtqcgbfhBHeNghYkwcBgDcn9yhU1JOAVMGddd8ewvKWQIMzkveNeYuv2xBq7p8XF1j6PwloT9y0KwWl1K0qTQxrsWNrQKye1YVVSs-8A3tXGXsUHmbMahdCTIJW0X-9G7SgWeeWY-vnH5stQgUSy4uX5AX8Ia_lf3aZM0MAhQGM2a9NbTlZz7MDLBBU2RAnfzJkbGjUnwdLWT7-jqAiTuouz-Ce-2R9DZYIG8ZyjWQFvDUfLTyZrW0SYisEBMpwzCpm7AyznUZJ5TqJHp4PW3Oq4n0mzBuO4Kz_KwJfHo6uHk80RTpg7as22k8jKN1gpULmD2LwKKbLXuqENIDiZabH9lHkN-yocCmhRLeR_V4cbLJfEHo_65hcSJB09kKSJLkjGoPkTd0kOnnQuRKvmD_LmKDXHNzrdEgKNjEjEQumR_Nbkk4m20c22ywDW7_GcXPVMmGZ3iX9yYAkCiVM6oxdrYRmE3zZkpSSkGCbHk0sxaMrswcvWiJTEEJWaxJEmldEBpzfRS7tJvMdsrImZtuu5ExXp0E;
const accountId = 71e5fedf-0a6f-47c3-a1d7-fcbd423576c8 ; // falls bekannt

document.addEventListener("DOMContentLoaded", () => {
  loadAccountInfo();
  loadPositions();

  document.getElementById("filterInput").addEventListener("input", filterPositions);
  document.getElementById("modeSwitch").addEventListener("change", (e) => {
    console.log("Modus geändert auf:", e.target.value);
  });
});

function loadAccountInfo() {
  // Beispiel-Daten simulieren – später durch echte API ersetzen
  const balance = 12673.55;
  const marginLevel = 134;

  document.getElementById("balance").textContent = `💰 Kontostand: ${balance.toFixed(2)} €`;
  const marginElem = document.getElementById("margin-level");
  marginElem.textContent = `📊 Margin-Level: ${marginLevel.toFixed(1)}%`;

  marginElem.classList.remove("green", "yellow", "red");
  if (marginLevel > 150) marginElem.classList.add("green");
  else if (marginLevel > 50) marginElem.classList.add("yellow");
  else marginElem.classList.add("red");
}

function loadPositions() {
  const dummyPositions = [
    { symbol: "EURUSD", lot: 0.5, side: "Buy", sl: 1.085, tp: 1.105, trader: "KI" },
    { symbol: "XAUUSD", lot: 0.2, side: "Sell", sl: 1950, tp: 1900, trader: "TraderX" },
  ];

  const tbody = document.getElementById("positions");
  tbody.innerHTML = "";

  dummyPositions.forEach(pos => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pos.symbol}</td>
      <td>${pos.lot}</td>
      <td>${pos.side}</td>
      <td>${pos.sl}</td>
      <td>${pos.tp}</td>
      <td>${pos.trader}</td>
      <td><button onclick="closeTrade('${pos.symbol}')">❌ Schließen</button></td>
    `;
    tbody.appendChild(row);
  });
}

function filterPositions() {
  const value = document.getElementById("filterInput").value.toLowerCase();
  const rows = document.querySelectorAll("#positions tr");
  rows.forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
  });
}

function closeTrade(symbol) {
  alert(`Trade ${symbol} wird geschlossen… (Demo)`);
}

function adjustRisk() {
  alert("Risikoanpassung geöffnet (Demo)");
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Tagesreport (Demo)", 10, 10);
  doc.save("Tagesreport.pdf");
}

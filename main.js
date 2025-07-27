const METAAPI_TOKEN=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzYTFmMGRmNjBjM2UwNWIzZjg2NGE1NjQ5NTFkYTNkZSIsImFjY2Vzc1J1bGVzIjpbeyJpZCI6InRyYWRpbmctYWNjb3VudC1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJtZXRhYXBpLXJwYy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFhcGktcmVhbC10aW1lLXN0cmVhbWluZy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJyaXNrLW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfV0sImlnbm9yZVJhdGVMaW1pdHMiOmZhbHNlLCJ0b2tlbklkIjoiMjAyMTAyMTMiLCJpbXBlcnNvbmF0ZWQiOmZhbHNlLCJyZWFsVXNlcklkIjoiM2ExZjBkZjYwYzNlMDViM2Y4NjRhNTY0OTUxZGEzZGUiLCJpYXQiOjE3NTM2NDQ3NDEsImV4cCI6MTc2MTQyMDc0MX0.aQR_kbdw5evksI-lY97Q9MakbXNLKWEyx_Yp1RrnV3QbIB4UXlQ47-Rb7WEiU9nCYJ9LhuD1KRnROwYBe0gaq-GAduDK2efqv2EgzbDyEY_2Qeor1cevlTklS7kGizDQrH6d6wsIhqI7_aSuFdoACyPD0c3S4qt2aocTbTLWMlg-gTR65w1tSuq-gQzMjFPPGLFLZUnA36z81mamsAonaPO2DnptpNtA4LDdXDhMS2yYF73-5S5jT5sj_Yo2QabRLeEpHDkqRHhlvcyl_OpTXzv0lvFPMkqYCdoEXmtJAwqXnu9yMFifoz--Sk_UGga743N1oJZtHvdUvSAKDsPkajiWuZEiViNtaMXW1Z3Y9uQgBByLdsCyAfjN6VOG4zdt042y4nY3F-5G0wNf5aNQIBXWhIRvi1Czxfb42qMZu9N9-hxwHoCB31gsfIMv4ST5Gq748MS1ytkBioTYt5UnRcbcd2mFO1eXcUJ3o5_FGMkhP5-9t4kwT18PlHg7S9s38V-kOnzzQ09xb_xpp7V5v_dOJh3LoD4zGlc5VWZiSYoiVxpoe_wRc9ViyB1Z1GO87d-4QdDI__VJAZcrCxzs2RUgalpWNw4zYTrA6LCXUnJAmVjIpFlNznOx4Ht8-oXOlokhxqvtJxFeNwv8p8X6_V_d0afOVrvR5dO5MtKGocE;
const accountId=71e5fedf-0a6f-47c3-a1d7-fcbd423576c8 ; // falls bekannt

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

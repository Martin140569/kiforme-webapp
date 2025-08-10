// script.js

async function ladeKontostand() {
  try {
    const res = await fetch('/api/metaapi');
    const data = await res.json();
    if (data.error) {
      document.getElementById('balance').innerText = 'Fehler: ' + data.error;
    } else {
      document.getElementById('balance').innerText = `${data.balance.toFixed(2)} USD`;
    }
  } catch (err) {
    document.getElementById('balance').innerText = 'Fehler: ' + err.message;
  }
}

document.getElementById('modus-btn').addEventListener('click', () => {
  const modusText = document.getElementById('modus-text');
  modusText.innerText = modusText.innerText === 'Hybrid' ? 'Vollautomatik' : 'Hybrid';
});

document.getElementById('pdf-btn').addEventListener('click', () => {
  alert('PDF-Export kommt noch 😉');
});

// Starte direkt beim Laden
ladeKontostand();

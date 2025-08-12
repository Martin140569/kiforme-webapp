// === Konfiguration ===
const META_API_TOKEN = eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzYTFmMGRmNjBjM2UwNWIzZjg2NGE1NjQ5NTFkYTNkZSIsImFjY2Vzc1J1bGVzIjpbeyJpZCI6InRyYWRpbmctYWNjb3VudC1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJtZXRhYXBpLXJwYy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFhcGktcmVhbC10aW1lLXN0cmVhbWluZy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJyaXNrLW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfV0sImlnbm9yZVJhdGVMaW1pdHMiOmZhbHNlLCJ0b2tlbklkIjoiMjAyMTAyMTMiLCJpbXBlcnNvbmF0ZWQiOmZhbHNlLCJyZWFsVXNlcklkIjoiM2ExZjBkZjYwYzNlMDViM2Y4NjRhNTY0OTUxZGEzZGUiLCJpYXQiOjE3NTQ4MDY3NTUsImV4cCI6MTc2MjU4Mjc1NX0.C06UqmuH5cx3XrE5wOUpt0gWN3sNURZwZubxHceTTsEsr7AcSTYdeLj_qBiuA4YKeKdFEpHR5up3cC9fKk-dC3cvNDaBVeFUu3qgLVPr7n-YI3oLOt6ApQT4lnAqUYY2t2ngqmCMAz9zAVMF73mxJ_vUPcKlCpnlVrP8JDN-4AigHFGNC2-bbqVhzXAfHMQodNcy-Qw03cRdKpZ9HFXn--2Za_EHBtHWzWbeoRME9xI_i3QpqvW6cZZIAaBX-X05gzbR2806NeyDrq30a8PUVFc58PAdMHHvFYcuJbk6F3XD-GClxknRX4qLWStiGV84kXLawbEg8osCbA8pfOYLU3aN4meOusb016MT5dySYamGhA9FS9v1hW2fWYVIRU74S4qjchhVIlD75shhRFuQ5-LwBxs0SwCQA5kJmE9QZVOzWc2O_JoV1kCW7yOQA4XCT9zB-XM3o3EZK0DAaJu9hr2pDgglHCKyCu5K05RAZPC7zYAiKOaTPA3b1rPP4rGuojpc7rFdmGmmj5EnInIi0vf5RQEuAgR4JBlkz1jFjIPbJ_vgeKRQ84RUHuVbCYceTbUfrdiMmhVqEJY1kApBIW68EL0jaAdMIZN9lWstCAn62hcxYPDANH7E5xUIOqGsi5b8-s7OA5NEDmklq0gv1__5u-btHCK7LlMSIgiMtBE; // HIER DEIN TOKEN
const ACCOUNT_ID = 71e5fedf-0a6f-47c3-a1d7-fcbd423576c8; // AvaTrade Account ID

// === Live Kontostand abrufen ===
async function loadBalance() {
    try {
        const res = await fetch(`https://mt-client-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${ACCOUNT_ID}/accountInformation`, {
            headers: { "auth-token": META_API_TOKEN }
        });
        const data = await res.json();
        document.getElementById("account-balance").innerText =
            `Kontostand: ${parseFloat(data.balance).toFixed(2)} €`;
    } catch (err) {
        document.getElementById("account-balance").innerText = "Kontostand: Fehler";
    }
}

// === Offene Trades abrufen ===
async function loadTrades() {
    const tableBody = document.getElementById("trades-table");
    tableBody.innerHTML = `<tr><td colspan="7">Lädt...</td></tr>`;

    try {
        const res = await fetch(`https://mt-client-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${ACCOUNT_ID}/positions`, {
            headers: { "auth-token": META_API_TOKEN }
        });
        const trades = await res.json();

        if (!trades.length) {
            tableBody.innerHTML = `<tr><td colspan="7">Keine offenen Trades</td></tr>`;
            return;
        }

        tableBody.innerHTML = trades.map(trade => `
            <tr>
                <td>${trade.symbol}</td>
                <td>${trade.volume}</td>
                <td>${trade.type}</td>
                <td>${trade.stopLoss || '-'}</td>
                <td>${trade.takeProfit || '-'}</td>
                <td>${trade.magic || 'KI'}</td>
                <td><button onclick="closeTrade('${trade.id}')">❌ Schließen</button></td>
            </tr>
        `).join('');
    } catch (err) {
        tableBody.innerHTML = `<tr><td colspan="7">Fehler beim Laden</td></tr>`;
    }
}

// === Trade schließen ===
async function closeTrade(tradeId) {
    alert(`Trade ${tradeId} schließen (Backend-Integration nötig)`);
}

// === KI-Modus umschalten ===
document.getElementById("toggle-mode").addEventListener("click", () => {
    const statusEl = document.getElementById("ki-status");
    if (statusEl.innerText.includes("Hybrid")) {
        statusEl.innerText = "KI-Modus: Vollautomatik";
    } else {
        statusEl.innerText = "KI-Modus: Hybrid";
    }
});

// === Events ===
document.getElementById("refresh-trades").addEventListener("click", loadTrades);
document.getElementById("download-report").addEventListener("click", () => alert("PDF-Export noch nicht aktiv"));
document.getElementById("risk-settings").addEventListener("click", () => alert("Risiko-Einstellung noch nicht aktiv"));

// === Initial laden ===
loadBalance();
loadTrades();

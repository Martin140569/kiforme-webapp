const token = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzYTFmMGRmNjBjM2UwNWIzZjg2NGE1NjQ5NTFkYTNkZSIsImFjY2Vzc1J1bGVzIjpbeyJpZCI6InRyYWRpbmctYWNjb3VudC1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJtZXRhYXBpLXJwYy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFhcGktcmVhbC10aW1lLXN0cmVhbWluZy1hcGkiLCJtZXRob2RzIjpbIm1ldGFhcGktYXBpOndzOnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDo3MWU1ZmVkZi0wYTZmLTQ3YzMtYTFkNy1mY2JkNDIzNTc2YzgiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6NzFlNWZlZGYtMGE2Zi00N2MzLWExZDctZmNiZDQyMzU3NmM4Il19LHsiaWQiOiJyaXNrLW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJyaXNrLW1hbmFnZW1lbnQtYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjcxZTVmZWRmLTBhNmYtNDdjMy1hMWQ3LWZjYmQ0MjM1NzZjOCJdfV0sImlnbm9yZVJhdGVMaW1pdHMiOmZhbHNlLCJ0b2tlbklkIjoiMjAyMTAyMTMiLCJpbXBlcnNvbmF0ZWQiOmZhbHNlLCJyZWFsVXNlcklkIjoiM2ExZjBkZjYwYzNlMDViM2Y4NjRhNTY0OTUxZGEzZGUiLCJpYXQiOjE3NTQ2Njc1ODYsImV4cCI6MTc2MjQ0MzU4Nn0.UGcTBMYmKEAVSz7hU-p61dK4aS5RVz2CDBsQs-Lf3xOf6YOtXbWOPMcsUUen5cMuV_Bjqh5rmEFIBsBNB9wGvCeION7AiBYADwxvVRJnkDFnGabhunl3MaX-8whuQElRejF3CL7eJJDBhfYnj8XZf7AkucIx12Zr4uYBs6aZGuCdRNI7pcwgip7Hw1TCPzVFVu3jQAgLXhaRmGW1JODN7919CGKgTiAW6AGEhBGlkoHjuL9CU_cHpdbBDV3mwq9uZQ1GU_yEJ2clrvCo_ibVlyhW01qC-TbiR8TkT1C9OwtLf96g21u7WquIg_iN0hgwLQFXAuBFu1w6dIV0eTFjvJ_sQOZwX4wg4YUuUWXpObn5Qa-Vnyk7PICR_V7nfDnrDdSSwuXITs_qzFlp7qKkmaLc2cY17B2-Azmidg0Hl80nzT-8GFrmO5j6TX_VC8NbagLt-VvQeAZNSoAo-3BeqMqKANqINz0jEgdY9lE-xla-teqIQpJL3jRhXVulUbU2m-nCDIWb5gWKcKC0DqXnxPbtjCaDiwtv5I0gS9ogs8x3awrKjU-FbQNj-aTJaMDDKxECHVSFhscKQ9FuZSgNSQap5tJtft06ys1BZNV07_DEV0ExtzO3EJMxAovskpdje4QBG0FSmyEVy4r_9cCgkiN4ZBfz1HuhR8t0czrR8_U";
const accountId = "71e5fedf-0a6f-47c3-a1d7-fcbd423576c8";

async function fetchLiveData() {
  try {
    const res = await fetch(`https://mt-provisioning-api-v1.agiliumtrade.ai/users/current/accounts/${accountId}/connection`, {
      headers: {
        "auth-token": token
      }
    });
    const connection = await res.json();

    if (!connection.connected) {
      document.getElementById("balance").innerText = "❌ Nicht verbunden";
      return;
    }

    const accRes = await fetch(`https://mt-api.agiliumtrade.ai/users/current/accounts/${accountId}/balance`, {
      headers: {
        "auth-token": token
      }
    });

    const accData = await accRes.json();
    document.getElementById("balance").innerText = `${accData.balance.toFixed(2)} €`;

    // TODO: offene Trades live holen und rendern
    const tradesRes = await fetch(`https://mt-api.agiliumtrade.ai/users/current/accounts/${accountId}/open-trades`, {
      headers: {
        "auth-token": token
      }
    });

    const tradesData = await tradesRes.json();

    const trades = tradesData.map(t => ({
      symbol: t.symbol,
      dir: t.type === 'ORDER_TYPE_BUY' ? 'Buy' : 'Sell',
      lot: t.volume,
      sl: t.sl,
      tp: t.tp,
      trader: t.comment || "KI",
      plattform: "AvaTrade"
    }));

    renderTrades(trades);

  } catch (err) {
    console.error("Fehler beim Laden der Kontodaten:", err);
    document.getElementById("balance").innerText = "⚠️ Fehler bei Abfrage";
  }
}

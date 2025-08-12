async function loadData() {
  try {
    const balanceRes = await fetch('/api/metaapi?type=balance');
    const balanceData = await balanceRes.json();
    document.getElementById('balance').innerText = "Kontostand: " + balanceData.balance;

    const tradesRes = await fetch('/api/metaapi?type=trades');
    const tradesData = await tradesRes.json();
    document.getElementById('trades').innerHTML = tradesData.trades
      .map(t => `<div>${t.symbol} (${t.volume} Lot) - ${t.profit}€</div>`)
      .join('');
  } catch (error) {
    console.error(error);
  }
}

loadData();

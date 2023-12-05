function setBalance(data) {

    const balance = data['total_balance'][data['total_balance'].length - 1];

    totalBalance = document.getElementById('total-balance').innerHTML = `$${addDecimals(balance)}`;
}
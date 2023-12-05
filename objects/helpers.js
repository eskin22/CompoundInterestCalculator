
function getInputs() {

    var grossSalary = +document.getElementById('ib-grossSalary').value;
    var contributionPercent = +document.getElementById('ib-contributionPercent').value;
    var initialInvestment = +document.getElementById('ib-initialInvestment').value;
    var rateOfReturn = +document.getElementById('ib-rateOfReturn').value;
    var years = +document.getElementById('ib-years').value;

    const data = {
        'grossSalary' : grossSalary,
        'contributionPercent' : contributionPercent,
        'initialInvestment' : initialInvestment,
        'rateOfReturn' : rateOfReturn,
        'years' : years
    }

    console.log(data);

    return data
}

function addDecimals(number) {
    let newNumber = Number(number);
    let formattedNumber = newNumber.toLocaleString('en-US');
    // console.log(formattedNumber);
    return formattedNumber;
}

function setBalance(data) {

    const balance = data['total_balance'][data['total_balance'].length - 1];

    totalBalance = document.getElementById('total-balance').innerHTML = `$${addDecimals(balance)}`;
}
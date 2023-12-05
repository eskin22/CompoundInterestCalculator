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
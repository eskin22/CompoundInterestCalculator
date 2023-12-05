/*
This file defines helper methods to enable the overall functionality of the application
*/

// harvests the data entered in the input fields by the user
function getInputs() {

    // read in the required parameters for calculation as integers
    var grossSalary = +document.getElementById('ib-grossSalary').value;
    var contributionPercent = +document.getElementById('ib-contributionPercent').value;
    var initialInvestment = +document.getElementById('ib-initialInvestment').value;
    var rateOfReturn = +document.getElementById('ib-rateOfReturn').value;
    var years = +document.getElementById('ib-years').value;

    // store the data in a hashmap and return
    const data = {
        'grossSalary' : grossSalary,
        'contributionPercent' : contributionPercent,
        'initialInvestment' : initialInvestment,
        'rateOfReturn' : rateOfReturn,
        'years' : years
    }

    return data
}

// formats a string representation of a number 
function formatNumber(number) {

    // convert the string number to a Number object and then transform it into formatted string
    let newNumber = Number(number);
    let formattedNumber = newNumber.toLocaleString('en-US');

    return formattedNumber;
}

// sets the balance above the plot to the total balance at the end of the period
function setBalance(data) {

    // grab the total balance at the last index of the list (last year)
    const balance = data['total_balance'][data['total_balance'].length - 1];

    // update the total balance on the webpage
    totalBalance = document.getElementById('total-balance').innerHTML = `$${formatNumber(balance)}`;
}
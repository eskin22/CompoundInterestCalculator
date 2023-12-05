/*
This file is used to display a default plot to give the users a sense of what the application
does before they enter their data.
*/

// create a new CompoundInterestCalculator object and initialize it with some basic data
const calculator = new CompoundInterestCalculator(
    grossSalary = 50000,
    contributionPercent = 10,
    initialInvestment = 10000,
    rateOfReturn = 6,
    years = 10
);

// calculate the principal and interest growth over time
data = calculator.calculateWithInterest();

// graph the plot and put it onto the webpage
graphPlot(data);

// adjust the total balance above the plot
setBalance(data);




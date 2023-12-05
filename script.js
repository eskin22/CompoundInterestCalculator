/*
This file contains the main function for the application
*/

function main() {

    // start by getting the user inputs from the input boxes
    userInput = getInputs();

    // create a new CompoundInterestCalculator object for performing calculations
    const calculator = new CompoundInterestCalculator(
        userInput['grossSalary'],
        userInput['contributionPercent'],
        userInput['initialInvestment'],
        userInput['rateOfReturn'],
        userInput['years']
    );
    
    // calculate the total principal, interest, and balance over time
    data = calculator.calculateWithInterest();
    
    // create a plot and display the results on the webpage
    graphPlot(data);
    
    // update the balance on the webpage
    setBalance(data);
}
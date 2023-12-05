
function main() {
    userInput = getInputs();

    const calculator = new CompoundInterestCalculator(
        userInput['grossSalary'],
        userInput['contributionPercent'],
        userInput['initialInvestment'],
        userInput['rateOfReturn'],
        userInput['years']
    );
    
    data = calculator.calculateWithInterest();

    // console.log(data);
    
    graphPlot(data);
    
    setBalance(data);
}

// userInput = getInputs();

// const calculator = new CompoundInterestCalculator(
//     userInput['grossSalary'],
//     userInput['contributionPercent'],
//     userInput['initialInvestment'],
//     userInput['rateOfReturn'],
//     userInput['years']
// );

// data = calculator.calculateWithInterest();

// graphPlot(data);
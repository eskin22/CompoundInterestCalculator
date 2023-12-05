/*
This file defines a CompoundInterestCalculator class to be used for calculating the 
principal and interest accumulation over time based on the data the user enters
*/

class CompoundInterestCalculator {

    // required parameters
    constructor(
        grossSalary,
        contributionPercent,
        initialInvestment,
        rateOfReturn,
        years

    ) {
        this.grossSalary = grossSalary;
        this.contributionPercent = contributionPercent;
        this.initialInvestment = initialInvestment;
        this.rateOfReturn = rateOfReturn;
        this.years = years;
    }

    // calculates the growth of the principal investment without accounting for compound interest
    calculateNoInterest() {

        // determine the annual contribution based on a percent of the gross salary
        var annualContribution = (this.contributionPercent / 100) * this.grossSalary;

        // add the annual contribution x years of growth to determine the total balance at 
        // the end of the period and return it
        var totalBalance = this.initialInvestment + (years * annualContribution);

        return totalBalance;
    }

    // calculates the growth of the principal investment with compound interest
    calculateWithInterest() {
        
        // determine annual contribution and interest rate for calculation
        var annualContribution = (this.contributionPercent / 100) * this.grossSalary;
        var interestRate = this.rateOfReturn / 100;

        // initially, the total principal is equal to the initial investment 
        // and total interest will be zero since no interest has accrued
        var totalPrincipal = this.initialInvestment;
        var totalInterest = 0.0;

        // total balance will also be equal to the initial investment because no interest
        // has been accrued (totalBalance = totalPrincipal + totalInterest)
        var totalBalance = this.initialInvestment;

        // get the current year to concretely forecast into the future
        var currentYear = new Date().getFullYear();

        // set up a hashmap with arrays to store the data at each year for later plotting
        var data = {
            'years' : [],
            'total_principal' : [],
            'total_interest' : [],
            'total_balance' : []
        };

        // for each year, we need to update the year, totalInterest, totalPrincipal, and totalBalance
        for (let i = 0; i <= this.years-1; i++) {

            // add new year
            console.log(`Year ${i}`);
            data['years'].push(currentYear + i);

            // interest is calculated based on the totalBalance from the previous year
            totalInterest += totalBalance * interestRate;
            data['total_interest'].push(Math.round(totalInterest));

            // then we incrememnt the total principal by the annual contribution amount
            totalPrincipal += annualContribution;
            data['total_principal'].push(Math.round(totalPrincipal));

            // update the total balance as the totalPrincipal + totalInterest
            totalBalance = totalPrincipal + totalInterest;
            data['total_balance'].push(Math.round(totalBalance));

            // print the result to the console for verification
            console.log(`Total Principal: ${totalPrincipal}\nTotal Interest: ${totalInterest}\nTotal Balance: ${totalBalance}`);
        }

        // return the stored data
        return data;
    }
}

module.exports = CompoundInterestCalculator;
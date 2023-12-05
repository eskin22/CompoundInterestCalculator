class CompoundInterestCalculator {
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

    calculateNoInterest() {
        var annualContribution = (this.contributionPercent / 100) * this.grossSalary;
        var totalBalance = this.initialInvestment + (years * annualContribution);
        return totalBalance;
    }

    calculateWithInterest() {
        var annualContribution = (this.contributionPercent / 100) * this.grossSalary;
        var interestRate = this.rateOfReturn / 100;
        var totalPrincipal = this.initialInvestment;
        var totalInterest = 0.0;
        var totalBalance = this.initialInvestment;
        var currentYear = new Date().getFullYear();

        var data = {
            'years' : [],
            'total_principal' : [],
            'total_interest' : [],
            'total_balance' : []
        };

        for (let i = 0; i <= this.years-1; i++) {
            console.log(`Year ${i}`);
            data['years'].push(currentYear + i);

            totalInterest += totalBalance * interestRate;
            data['total_interest'].push(Math.round(totalInterest));

            totalPrincipal += annualContribution;
            data['total_principal'].push(Math.round(totalPrincipal));

            totalBalance = totalPrincipal + totalInterest;
            data['total_balance'].push(Math.round(totalBalance));

            console.log(`Total Principal: ${totalPrincipal}\nTotal Interest: ${totalInterest}\nTotal Balance: ${totalBalance}`);
        }

        return data;
    }
}

module.exports = CompoundInterestCalculator;
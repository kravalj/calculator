package spring.calculator;

import org.springframework.stereotype.Component;

@Component
public class CalculatorService {

    public CalculatorRecord calculate (int loanSize, double monthlyInterestRate, int amountOfPayments) {

        final byte monYear = 12;
        final byte percentage = 100;

        double monthlyPayment = (loanSize * (monthlyInterestRate / (monYear * percentage)))
                / (1- Math.pow(1 + (monthlyInterestRate / (monYear * percentage)), (-12 * amountOfPayments)) );

        double finalAmount = (amountOfPayments * monYear) * monthlyPayment;

        double overPayment = finalAmount - loanSize;

        return new CalculatorRecord(
                Math.round(monthlyPayment), Math.round(finalAmount), Math.round(overPayment)
        );
    }

}

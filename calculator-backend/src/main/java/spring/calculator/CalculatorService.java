package spring.calculator;

import org.springframework.stereotype.Component;

@Component
public class CalculatorService {

    public CalculatorRecord calculate (int loanSize, double monthlyInterestRate, int amountOfPayments) {

        final byte monYear = 12;
        final byte percentage = 100;

        double lengthLoan = (loanSize * (monthlyInterestRate / (monYear * percentage)))
                / (1- Math.pow(1 + (monthlyInterestRate / (monYear * percentage)), (-amountOfPayments)) );

        double finalAmount = (amountOfPayments * monYear) * lengthLoan;

        double overPayment = finalAmount - loanSize;

        return new CalculatorRecord(
                Math.round(lengthLoan), Math.round(finalAmount), Math.round(overPayment)
        );
    }

}

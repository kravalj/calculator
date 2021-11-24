package spring.calculator;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CalculatorRecord {

    final byte monthsInTheYEar = 12;
    final byte percent = 100;

    private double lengthLoan;
    private double finalAmount;
    private double overPayment;

    public CalculatorRecord (double lengthLoan, double finalAmount, double overPayment) {
        this.lengthLoan = lengthLoan;
        this.finalAmount = finalAmount;
        this.overPayment = overPayment;
    }
}

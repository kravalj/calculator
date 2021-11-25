package spring.calculator;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CalculatorRecord {

    final byte monthsInTheYEar = 12;
    final byte percent = 100;

    private double monthlyPayment;
    private double finalAmount;
    private double overPayment;

    public CalculatorRecord (double monthlyPayment, double finalAmount, double overPayment) {
        this.monthlyPayment = monthlyPayment;
        this.finalAmount = finalAmount;
        this.overPayment = overPayment;
    }
}

package spring.calculator;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CalculatorServiceTest {

    @Autowired
    CalculatorService calculatorService;

    @Test
    public void calculate() {
        CalculatorRecord calculatorRecord = calculatorService.calculate(200000, 7.9, 11);

        System.out.println("Mesicni splatka: " + calculatorRecord.getMonthlyPayment() + ", "
                + "Preplatok: " + calculatorRecord.getOverPayment() + ", " + "Celkova castka: " + calculatorRecord.getFinalAmount());

    }

}
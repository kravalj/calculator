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
        CalculatorRecord calculatorRecordList = calculatorService.calculate(200000, 7.9, 11);

        System.out.println("Mesicni splatka: " + calculatorRecordList.getLengthLoan() + ", "
                + "Preplatok: " + calculatorRecordList.getOverPayment() + ", " + "Celkova castka: " + calculatorRecordList.getFinalAmount());

    }

}
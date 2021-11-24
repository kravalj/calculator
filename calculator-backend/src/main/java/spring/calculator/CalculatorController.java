package spring.calculator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("loan-calculator")
public class CalculatorController {

    @Autowired
    CalculatorService calculatorService;

    @GetMapping("calculate")
    public CalculatorRecord getCalculateRecord(@RequestParam int loanSize, double monthlyInterestRate, int amountOfPayments) {
        return calculatorService.calculate(loanSize, monthlyInterestRate, amountOfPayments);
    }
}

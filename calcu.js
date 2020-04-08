const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  //this function allows the digit button works so that when they are clicked, the feedback is diplayed to the user
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    
  //reresent input of a user
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;//overwrite the default value 0
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;//if the number is a non-zero number, append number to it
    }
  }
  
  function inputDecimal(dot) {
      if (calculator.waitingForSecondOperand === true) return;
    
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
      calculator.displayValue += dot;
    }
  }
  //operators. a second input is added to the first
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    //when an operator key is pressed, convert current no on screen to num and store in calculator.first operand
  //if you change your mind on the operator, 
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  //if no second operand is added
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  //if second operand as added
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  //handling buttons
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
      //return the key
    }
  
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      resetCalculator();
          updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });
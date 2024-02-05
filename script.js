let currentInput = "";
let operation = null; 

//Clear Display Function

function clearDisplay() {
  document.getElementById("display").value = "";
  currentInput = "";
  operation = null;
}

// Append to display

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

// Calculate Function

function calculate() {
  const expression = currentInput.split("");
  const operand1 = parseFloat(expression[0]);
  const operator = expression[1];
  const operand2 = parseFloat(expression[2]);
  let result;

  if (isNaN(operand1) || isNaN(operand2) || !operator) {
    // Ensure operands and operator are valid
    document.getElementById("display").value = "Invalid expression";
    return;
  }

  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "/":
      if (operand2 === 0) {
        document.getElementById("display").value = "Cannot divide by zero";
        return;
      }
      result = operand1 / operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    default:
      document.getElementById("display").value = "Invalid operator";
      return;
  }

  document.getElementById("display").value = result;
  currentInput = `${result}`;
  operation = null;
}

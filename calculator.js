let history = []; // variable


function add(a, b) {
    let result = a + b;
    saveCalculation("Addition", a, b, result);
    return result;
}

function subtract(a, b) {
    let result = a - b;
    saveCalculation("Subtraction", a, b, result);
    return result;
}

function multiply(a, b) {
    let result = a * b;
    saveCalculation("Multiplication", a, b, result);
    return result;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    let result = a / b;
    saveCalculation("Division", a, b, result);
    return result;
}

function saveCalculation(operation, a, b, result) {
    history.push(
        {
        operation: operation,
        operands: [a, b],
        result: result
    }
);
}
function viewHistory() {
    if (history.length === 0) {
        console.log("No calculations yet.");
    } else {
        console.log("Calculation History:");
        history.forEach((calc, index) => {
            console.log(`${index + 1}. ${calc.operation}: ${calc.operands[0]} and ${calc.operands[1]} = ${calc.result}`);
        });
    }
}

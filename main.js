const buttons = document.querySelectorAll(".button")
const box = document.querySelector(".result-box")
const buttonOps = document.querySelectorAll(".button-op")
const clearButton = document.querySelector(".clear-button")
let firstNumber = null;
let secondNumber = null;
let operator = null;


const getNumber = function (btn) {
    btn.addEventListener('click', () => {
        const value = btn.value;
        if (firstNumber === null || operator === null) {
            if (box.textContent === "Result: 0" || box.textContent === "Error") {
                box.textContent = value
            } else {
                box.textContent += value
            }
            firstNumber = parseFloat(box.textContent);
        } else {
            if (box.textContent === "Result: 0" || box.textContent === "Error") {
                box.textContent = value
            } else {
                box.textContent += value
            }
            secondNumber = parseFloat(box.textContent)
        }
    });
}

const getOperator = function (btnOp) {
    btnOp.addEventListener('click', () => {
        if (firstNumber !== null && operator === null) {
            operator = btnOp.value
            box.textContent += `${btnOp.textContent}`
        } else if (firstNumber !== null || secondNumber !== null || operator !== null) {
            calculate();
            operator = btnOp.value;
        }
    });
}

function clearCalculator(clearBtn) {
    clearBtn.addEventListener('click', () => {
        firstNumber = null;
        secondNumber = null;
        operator = null;
        box.textContent = "Result: 0"
    });
}


const calculate = function () {
    let answer;
    switch (operator) {
        case 'add':
            answer = firstNumber + secondNumber
            break;
        case 'sub':
            answer = firstNumber - secondNumber
            break;
        case 'multi':
            answer = firstNumber * secondNumber
            break;
        case 'divide':
            if (secondNumber === 0) {
                box.textContent = "Error"
            } else {
                answer = firstNumber / secondNumber
            }
            break;
        default:
            answer = "Error";
    }
    box.textContent = `Result: ${answer}`
    firstNumber = answer;
    secondNumber = null;
}


const add = function (x, y) {
    return x + y
}

const sub = function (x, y) {
    return x - y
}

const multi = function (x, y) {
    return x * y
}

const divide = function (x, y) {
    return x / y
}


buttons.forEach(getNumber)
buttonOps.forEach(getOperator)
clearCalculator(clearButton);
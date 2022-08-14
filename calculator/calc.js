let calcContainer = document.querySelector('.calculator');
let calcDisplay = document.querySelector('#display');
let displayTotal = " ";
let runningTotal = 0;
let temp = 0;
let btn = document.querySelector('.Buttons');
let decimalFlag = false;
let currentOperation = null;
let resetScreen = false;
let firstOperand = '';
let secondOperand = '';

/*let zeroBtn = document.getElementById('048Button');
let oneBtn = document.getElementById('049Button');
let twoBtn = document.getElementById('050Button');
let threeBtn = document.getElementById('051Button');
let fourBtn = document.getElementById('052Button');
let fiveBtn = document.getElementById('053Button');
let sixBtn = document.getElementById('054Button');
let sevenBtn = document.getElementById('055Button');
let eightBtn = document.getElementById('056Button');
let nineBtn = document.getElementById('057Button'); */
let numBtn = document.querySelectorAll('[data-number]');
let operatorBtn = document.querySelectorAll('[data-operator]');


let clearBtn = document.getElementById('clearButton');
let eraseBtn = document.getElementById('eraseButton');
let addBtn = document.getElementById('additionButton');
let subBtn = document.getElementById('subtractionButton');
let mulBtn = document.getElementById('multiplicationButton');
let divBtn = document.getElementById('divisionButton');
let eqlBtn = document.getElementById('executeButton');
let decBtn = document.getElementById('decimalButton');
let prevEquation = document.getElementById('prevEquation');

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "Sum":
            return add(num1, num2);
            
        
        case "Diff":
            return subtract(num1, num2);
            
        
        case "Prod":
            return multiply(num1, num2);
            

        case "Div":
            if (num2 === 0)
                return null;

            else return divide(num1, num2);

        default:
            return null;
            
    }
}

function clearScreen() {
    calcDisplay.textContent = '';
    resetScreen = false;
}

function clear() {
    calcDisplay.textContent = '0';
    prevEquation.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

/*function clearDisplay() {
    displayTotal = "0";
    calcDisplay.textContent = 0;
}

function clearAll() {
    displayTotal = "0";
    calcDisplay.textContent = 0;
    runningTotal = 0;
    temp = 0;
}

function clearTemp() {
    temp = 0;
} */

function backspace() {

}

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

function displayValue(result) {
    calcDisplay.textContent = result;
}

function readyOperation(operator) {
    if (currentOperation !== null)
        evaluate();

    firstOperand = calcDisplay.textContent;
    currentOperation = operator;
    prevEquation.textContent = `${firstOperand} ${currentOperation}`;
    resetScreen = true;
}

function evaluate() {
    if(currentOperation === null || resetScreen) 
        return;
    if (currentOperation === 'Div' && calcDisplay.textContent === '0'){
        alert("You can't divide by 0!");
        return;
    }

    secondOperand = calcDisplay.textContent;
    calcDisplay.textContent = roundNum(operate(currentOperation, firstOperand, secondOperand));
    prevEquation.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;
    currentOperation = null;
}

function appendNumber(number) {
    if(calcDisplay.textContent === '0' || resetScreen)
        clearScreen();
    calcDisplay.textContent += number;
}

//===================Event Listeners=====================
clearBtn.addEventListener("click", () => clear());

eraseBtn.addEventListener("click", function () {
    /*if(displayTotal.length <= 1 ){
        clearDisplay();
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal = displayTotal.slice(0, -1);
    calcDisplay.textContent = displayTotal;*/

    calcDisplay.textContent = calcDisplay.textContent
        .toString()
        .slice(0, -1)
});

numBtn.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorBtn.forEach((button) => 
    button.addEventListener('click', () => readyOperation(button.textContent))
)

eqlBtn.addEventListener('click', evaluate);

/*oneBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "1";
        return calcDisplay.textContent = displayTotal;
    }

    displayTotal += "1";
    calcDisplay.textContent = displayTotal;
});

twoBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "2";
        return calcDisplay.textContent = displayTotal;
    }

    displayTotal += "2";
    calcDisplay.textContent = displayTotal;
});

threeBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "3";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "3";
    calcDisplay.textContent = displayTotal;
});

fourBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "4";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "4";
    calcDisplay.textContent = displayTotal;
});

fiveBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "5";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "5";
    calcDisplay.textContent = displayTotal;
});

sixBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "6";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "6";
    calcDisplay.textContent = displayTotal;
});

sevenBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "7";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "7";
    calcDisplay.textContent = displayTotal;
});

eightBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "8";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "8";
    calcDisplay.textContent = displayTotal;
});

nineBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "9";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "9";
    calcDisplay.textContent = displayTotal;
});

zeroBtn.addEventListener("click", function () {
    if(displayTotal == "0" || displayTotal == 0){
        displayTotal = "0";
        return calcDisplay.textContent = displayTotal;
    }
    displayTotal += "0";
    calcDisplay.textContent = displayTotal;
}); */


/*addBtn.addEventListener("click", function () {
    temp = parseFloat(displayTotal);
    operator = "Sum";
    runningTotal = operate(operator, runningTotal, temp);
    clearDisplay();
    calcDisplay.textContent = runningTotal;
});

eqlBtn.addEventListener("click", () => {
    temp = parseFloat(displayTotal);
    runningTotal = operate(operator, runningTotal, temp);
    clearDisplay();
    calcDisplay.textContent = runningTotal;
});

subBtn.addEventListener("click", () => { 
    temp = parseFloat(displayTotal);
    operator = "Diff";
    if (runningTotal == 0) { 
        runningTotal = operate(operator, temp, 0);
        clearDisplay();
        calcDisplay.textContent = runningTotal;
    } else {
        runningTotal = operate(operator, runningTotal, temp);
        clearDisplay();
        calcDisplay.textContent = runningTotal;
    }

});

mulBtn.addEventListener("click", () => {
    
    
    if(runningTotal == 0 && displayTotal != 0) {
        temp = parseFloat(displayTotal);
        operator = "Prod";
        runningTotal = operate(operator, temp, 1);
        clearDisplay();
        clearTemp();
        calcDisplay.textContent = runningTotal;
    } else if (runningTotal != 0 && displayTotal == 0){
        calcDisplay.textContent = runningTotal;
    } else {
        temp = calcDisplay.textContent;
        operator = "Prod";
        runningTotal = operate(operator, runningTotal, temp);
        clearDisplay();
        clearTemp();
        calcDisplay.textContent = runningTotal;
    }
});

divBtn.addEventListener("click", () => {
    if(runningTotal == 0 && displayTotal == 0) {
        return 0;
    } else if(runningTotal == 0 && displayTotal != 0) {
        temp = parseFloat(displayTotal);
        operator = "Div";
        runningTotal = operate(operator, temp, 1);
        clearDisplay();
        clearTemp();
        calcDisplay.textContent = runningTotal;
    } else if (runningTotal != 0 && displayTotal == 0){
        calcDisplay.textContent = runningTotal;
    } else {
        temp = calcDisplay.textContent;
        operator = "Div";
        runningTotal = operate(operator, runningTotal, temp);
        clearDisplay();
        clearTemp();
        calcDisplay.textContent = runningTotal;
    }
});*/

decBtn.addEventListener("click", () => {
    if(decimalFlag == false) {
        displayTotal += ".";
    } else {
        return 0;
    }
});
//===================Event Listeners=====================
// C A L C U L A T O R   V A R I A B L E S
let firstNum;
let operatorSelected;
let secondNum;

// S I M P L E   C A L C U L A T O R   F U N C T I O N S
const add = function(a, b) {return a + b};
const subtract = function(a, b) {return a - b};
const multiply = function(a, b) {return a * b};
const divide = function(a, b) {return a / b};

//  O P E R A T E   F U N C T I O N
const operate = function(operator, a, b) {
    switch (operator) {
        case 'add': return screenDisplay.textContent = add(a, b);

        case 'subtract': return screenDisplay.textContent = subtract(a, b);

        case 'multiply': return screenDisplay.textContent = multiply(a, b);

        case 'divide': return screenDisplay.textContent = divide(a, b);
    }
}

const operators = document.querySelectorAll('.operators');
const screenDisplay = document.querySelector('#screen');
const numbers = document.querySelectorAll('.numbers');

function getFirstNumber() {
    addNumClicks();

    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            removeNumClicks();
            if (screenDisplay.textContent == '') {
                screenDisplay.textContent = 'ERROR';
            } else {
                operator.style.cssText = 'background-color: rgb(191, 124, 0)';
                firstNum = Number(screenDisplay.textContent);
                operatorSelected = `${operator.id}`;
                console.log(`First Number: ${firstNum}`);
                console.log(`Operator: ${operatorSelected}`);
                getSecondNumber();
            }
        });
    });
}

function getSecondNumber() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            operators.forEach((operator) => {
                if (operator.style.backgroundColor == 'rgb(191, 124, 0)') {
                    screenDisplay.textContent = '';
                    operator.style.backgroundColor = 'orange';
                }
            });
            screenDisplay.append(number.textContent);
        });
    });

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            removeNumClicks();
            operators.forEach(button => {
                if (button.style.backgroundColor == 'rgb(191, 124, 0)') {
                    secondNum = Number(screenDisplay.textContent);
                    operate(operatorSelected, firstNum, secondNum);
                    firstNum = Number(screenDisplay.textContent);
                    operator.style.backgroundColor = 'rgb(191, 124, 0)';
                    operatorSelected = `${operator.id}`;
                    getSecondNumber();
                }
            });
        });
    });

    const equal = document.querySelector('#equals');
    equal.addEventListener('click', () => {
        secondNum = Number(screenDisplay.textContent);
        console.log(`Second Number: ${secondNum}`);
        operate(operatorSelected, firstNum, secondNum);
    });
}

getFirstNumber();

function addNumClicks() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (screenDisplay.textContent == 'ERROR') {
                screenDisplay.textContent = number.textContent;
            } else {
                screenDisplay.append(number.textContent);
                operators.forEach((operator) => {
                    operator.addEventListener('click', () => {
                        removeNumClicks();
                    });
                });
            }
        });
    });
}

function removeNumClicks() {
    numbers.forEach((number) => {
        number.removeEventListener('click', () => {
            if (screenDisplay.textContent == 'ERROR') {
                screenDisplay.textContent = number.textContent;
            } else {
                screenDisplay.append(number.textContent);
            }
        });
    });    
}
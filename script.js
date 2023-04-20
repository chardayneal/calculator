// C A L C U L A T O R   V A R I A B L E S
let firstNum;
let operatorSelected;
let secondNum;

// S I M P L E   C A L C U L A T O R   F U N C T I O N S
const add = function(a, b) {return a + b};
const subtract = function(a, b) {return a - b};
const multiply = function(a, b) {return a * b};
const divide = function(a, b) {return a / b};


const operate = function(operator, a, b) {
    switch (operator) {
        case 'add':
            console.log(add(a, b));
            break;
        case 'subtract':
            console.log(subtract(a, b));
            break;
        case 'multiply':
            console.log(multiply(a, b));
            break;
        case 'divide':
            console.log(divide(a, b));
            break;
    }
}

const screenDisplay = document.querySelector('#screen');

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (screenDisplay.textContent == 'ERROR') {
            screenDisplay.textContent = number.textContent;
        } else {
            screenDisplay.append(number.textContent);
        }
    });

});

const operators = document.querySelectorAll('.operators');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (screenDisplay.textContent == '') {
            screenDisplay.textContent = 'ERROR';
        } else {
            firstNum = Number(screenDisplay.textContent)
            operatorSelected = `${operator.id}`;
            getSecondNumber();
            console.log(`First Number: ${firstNum}`);
            console.log(`Operator: ${operatorSelected}`);
        }
    });
});

function getSecondNumber() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {

            screenDisplay.append(number.textContent);
        });
    
    });

    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
                firstNum = Number(screenDisplay.textContent)
                operatorSelected = `${operator.id}`;
                screenDisplay.textContent = '';
                getSecondNumber();
                console.log(`First Number: ${firstNum}`);
                console.log(`Operator: ${operatorSelected}`);
            }
        );
    })
}

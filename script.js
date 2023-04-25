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
        case 'add': return screen.textContent = add(a, b);

        case 'subtract': return screen.textContent = subtract(a, b);

        case 'multiply': return screen.textContent = multiply(a, b);

        case 'divide': return screen.textContent = divide(a, b);
    }
}

// N U M B E R   C L I C K E D ?
const numButtons = document.querySelectorAll('.numbers');
const screen = document.getElementById('screen');
const equation = document.getElementById('equation');

numButtons.forEach((number) => {
    number.addEventListener('click', displayNumber);
});

let numString = '';
function displayNumber() {
    numString += this.textContent;
    screen.textContent = numString;
}

// O P E R A T O R   C L I C K E D ?
const opButtons = document.querySelectorAll('.operators');
const operatorList = Array.from(opButtons);
opButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        // check if any operators are currently selected
        opButtons.forEach(button => {
            if (button.style.backgroundColor == 'rgb(191, 124, 0)') {
                secondNum = Number(screen.textContent);
                console.log(secondNum);
                operate(operatorSelected, firstNum, secondNum);
                firstNum = Number(screen.textContent);
                console.log(firstNum);
                equation.textContent = `${firstNum} ${operator.textContent} `;
                button.style.backgroundColor = 'orange';
                numString = '';
            }
        });
        if (equation.textContent == '') {
            firstNum = Number(screen.textContent);
            operatorSelected = operator.id;
            console.log(firstNum);
            console.log(operatorSelected);
            operator.style.backgroundColor = 'rgb(191, 124, 0)';
            equation.append(`${firstNum} ${operator.textContent} `);
            numString = '';
        } 
        operator.style.backgroundColor = 'rgb(191, 124, 0)';
        operatorSelected = operator.id; 
    });
});

// E Q U A L   S I G N   C L I C K E D ?
const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    opButtons.forEach((button) => {
        if (button.style.backgroundColor = 'rgb(191, 124, 0)') {
            button.style.backgroundColor = 'orange';
        }
    })
    secondNum = Number(screen.textContent);
    operate(operatorSelected, firstNum, secondNum);
    equation.textContent = '';
    numString = ''
});

// + / -   S I G N   C L I C K E D ?
const absButton = document.getElementById('absolute');
absButton.addEventListener('click', () => {
    if (screen.textContent == '' || screen.textContent == 'ERROR') {
        screen.textContent = 'ERROR';
    } else if (Number(screen.textContent) > 0) {
        screen.textContent = '-' + screen.textContent;
        numString = screen.textContent;
    } else if(screen.textContent == '0') {
        screen.textContent = screen.textContent;
    }else {
        screen.textContent = `${Math.abs(Number(screen.textContent))}`
        numString = screen.textContent;
    }
});
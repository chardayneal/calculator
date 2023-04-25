// C A L C U L A T O R   V A R I A B L E S
let firstNum;
let operatorSelected;
let secondNum;
let solution = 0;

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
numButtons.forEach((button) => {
    button.addEventListener('click', displayNumber);
});

const equation = document.getElementById('equation');
const screen = document.querySelector('#screen');
let numString = '';
let operand; 
function displayNumber() {
    if (opArray.every(button => button.style.backgroundColor == 'orange') && Number(screen.textContent) == firstNum) {
        equation.textContent = '';
        numString = '';
        screen.textContent = numString;
        screen.append(this.textContent);
        numString += this.textContent;

    } else if (Number(numString) == operand || firstNum == Number(screen.textContent) || screen.textContent == 'NaN') {
        screen.textContent = '';
        numString = '';
        screen.append(this.textContent);
        numString += this.textContent;
    } else {
        screen.append(this.textContent);
        numString += this.textContent;   
    }
}


//  O P E R A T O R   C L I C K E D ?
const opButtons = document.querySelectorAll('.operators');
const opArray = Array.from(opButtons);
opButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (screen.textContent == '') {
            screen.textContent = 'ERROR';
        } else {
            if (firstNum == undefined || Number(screen.textContent) == solution) {
                firstNum = Number(numString);
                equation.append(`${firstNum} `);
                
            } else {
                secondNum = Number(numString);
                console.log(secondNum);
            }
        }
        if (operatorSelected == undefined) {
            operator.style.backgroundColor = 'rgb(191, 124, 0)';
        } else if (document.getElementById(`${operatorSelected}`).style.backgroundColor == 'rgb(191, 124, 0)') {
            document.getElementById(`${operatorSelected}`).style.backgroundColor = 'orange';
            operate(operatorSelected, firstNum, Number(screen.textContent));
            firstNum = Number(screen.textContent);  
        }
        operand = Number(numString);
        console.log(operand);
        operatorSelected = operator.id;
        equation.append(`${operator.textContent} `);
        operator.style.backgroundColor = 'rgb(191, 124, 0)';
    });
});

// E Q U A L   S I G N   C L I C K E D ?
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    opButtons.forEach((operator) => {
        operator.style.backgroundColor = 'orange';
    });
    secondNum = Number(screen.textContent);
    console.log(operand);
    equation.append(secondNum);
    equation.append(' = ');
    operate(operatorSelected, operand, secondNum);
    solution = Number(screen.textContent);
    firstNum = Number(screen.textContent);
    console.log(firstNum);
});


// A B S O L U T E   S I G N   C L I C K E D ?
const abSign = document.getElementById('absolute');
abSign.addEventListener('click', () => {
    if (screen.textContent = '0') {
        screen.textContent = screen.textContent;
    } else if (screen.textContent == '') {
        screen.textContent = 'ERROR';
    } else if (Number(screen.textContent) == Math.abs(Number(screen.textContent))) {
        screen.textContent = '-' + screen.textContent;
        numString = '-' + numString;
    } else {
        numString = screen.textContent;
        screen.textContent = numString.slice(1);
        numString = screen.textContent;
    }
});
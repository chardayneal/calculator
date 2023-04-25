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
let numString = '';
numButtons.forEach((number) => {
    number.addEventListener('click', displayNumber);
});
function displayNumber() {
    numString += this.textContent;
    screen.textContent = numString;
}

// O P E R A T O R   C L I C K E D ?
const opButtons = document.querySelectorAll('.operators');
opButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        // check if any operators are currently selected
        opButtons.forEach(button => {
            if (button.style.backgroundColor == 'rgb(117, 58, 67)') {
                shortenNumber();
                secondNum = Number(screen.textContent);
                console.log(secondNum);
                operate(operatorSelected, firstNum, secondNum);
                shortenNumber();
                firstNum = Number(screen.textContent);
                console.log(firstNum);
                equation.textContent = `${firstNum} ${operator.textContent} `;
                button.style.backgroundColor = 'rgb(145, 82, 80)';
            }
        });
        if (equation.textContent == '') {
            shortenNumber();
            firstNum = Number(screen.textContent);
            operatorSelected = operator.id;
            console.log(firstNum);
            console.log(operatorSelected);
            operator.style.backgroundColor = 'rgb(117, 58, 67)';
            equation.append(`${screen.textContent} ${operator.textContent} `);
        } 
        operator.style.backgroundColor = 'rgb(117, 58, 67)';
        operatorSelected = operator.id; 
        screen.textContent = '';
        numString = '';
    });
});

// E Q U A L   S I G N   C L I C K E D ?
const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    opButtons.forEach((button) => {
        if (button.style.backgroundColor = 'rgb(117, 58, 67)') {
            button.style.backgroundColor = 'rgb(145, 82, 80)';
        }
    })
    shortenNumber();
    secondNum = Number(screen.textContent);
    operate(operatorSelected, firstNum, secondNum);
    shortenNumber();
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

// D E L E T E   B U T T O N   C L I C K E D ?
const delButton = document.getElementById('delete');
delButton.addEventListener('click', () => {
    if (!screen.textContent) {
        screen.textContent = '0';
        numString = screen.textContent;
    } else {
        screen.textContent = screen.textContent.slice(0,-1);
        numString = screen.textContent;
    }
});

// C L E A R   B U T T O N   C L I C K E D ?
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    if (screen.textContent == '') {
        equation.textContent = '';
        opButtons.forEach((button) => {
            button.style.backgroundColor = 'rgb(145, 82, 80)';
        });
        numString = '';
    } else { 
        screen.textContent = '';
        numString = screen.textContent;
    }
});


// D E C I M A L   P R E S S E D ?
const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    if (!screen.textContent.includes('.')) {
        screen.textContent += '.';
        numString += '.';
    }
});

// C O N V E R T   L O N G   N U M B E R
let maxNumber = 999999999999;
let minNumber = -999999999999
function shortenNumber() {
    if (Number(screen.textContent) > maxNumber || Number(screen.textContent) < minNumber) {
       screen.textContent =  `${Number(screen.textContent).toExponential(5)}`;
       numString = screen.textContent;
    } else if (screen.textContent.includes('.') && screen.textContent.length > 13) {
        screen.textContent =  `${Number(screen.textContent).toExponential(5)}`;
        numString = screen.textContent;
    }
}

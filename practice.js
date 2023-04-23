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

const screen = document.querySelector('#screen');
let numString = '';
let operand; 
function displayNumber() {
    if (Number(numString) == operand || firstNum == Number(screen.textContent)) {
        screen.textContent = '';
        numString = '';
        screen.append(this.textContent);
        numString += this.textContent;
        console.log(numString);
    } else {
        screen.append(this.textContent);
        numString += this.textContent;
        console.log(numString);
    }
}


//  O P E R A T O R   C L I C K E D ?
const opButtons = document.querySelectorAll('.operators');
opButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (screen.textContent == '') {
            screen.textContent = 'ERROR';
        } else {
            if (firstNum == undefined || Number(screen.textContent) == firstNum) {
                firstNum = Number(screen.textContent);
            } else {
                secondNum = Number(numString);
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
        operatorSelected = operator.id;
        console.log(operatorSelected)
        operator.style.backgroundColor = 'rgb(191, 124, 0)';
    });
});

// E Q U A L   S I G N   C L I C K E D ?
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    opButtons.forEach((operator) => {
        operator.style.backgroundColor = 'orange';
    });
    secondNum = Number(numString);
    console.log(secondNum);
    console.log('equals');
    operate(operatorSelected, firstNum, secondNum);
   // solution = Number(screen.textContent);
    firstNum = Number(screen.textContent);
  //  console.log(firstNum);
});

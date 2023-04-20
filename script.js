// C A L C U L A T O R   V A R I A B L E S
let firstNum;
let operator;
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

operate('subtract', 2, 2);
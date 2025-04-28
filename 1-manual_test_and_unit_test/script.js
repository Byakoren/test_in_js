// Tester manuellement chacune de ses fonctions puis automatiser les tests unitaires avec Jest

// Function 1: Add two numbers
function add(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Only two arguments are allowed");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    return a + b;
}
    
// Function 2: Subtract two numbers
function subtract(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Only two arguments are allowed");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    console.log(a - b);
    return a - b;
}

// Function 3: Multiply two numbers
function multiply(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Only two arguments are allowed");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    console.log(a * b);
    return a * b;
}

// Function 4: Divide two numbers
function divide(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Only two arguments are allowed");
    }
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    console.log(a / b);
    return a / b;
}

// Function 5: Check if a number is even
function isEven(num) {
    if (arguments.length !== 1) {
        throw new Error("Only one argument is allowed");
    }
    if (typeof num !== 'number') {
        throw new Error("Argument must be a number");
    }
    console.log(num % 2 === 0);
    return num % 2 === 0;
}

// Function 6: Find the maximum of two numbers
function max(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Only two arguments are allowed");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }
    console.log(a > b ? a : b);
    return a > b ? a : b;
}

// Function 7: Reverse a string
function reverseString(str) {
    if (arguments.length !== 1) {
        throw new Error("Only one argument is allowed");
    }
    if (typeof str !== 'string') {
        throw new Error("Argument must be a string");
    }
    if (str.length < 2) {
        throw new Error("String cannot be empty");
    }
    console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('');
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    isEven,
    max,
    reverseString
}

// add(2, 3);
// add(3);
// add('a', 'b');
// add(2, 'e');
// add(2, 3, 4);

// subtract(-5, 3);
// subtract(5);
// subtract(5, 'a');
// subtract('a','b');
// subtract(5, 3, 2);

// multiply(2,3);
// multiply(2);
// multiply(2, 'a');
// multiply('a', 'b');
// multiply(2, 3, 4);

// divide(6, 3);
// divide(6);
// divide(6, 0);
// divide(6, 'a');
// divide('a', 'b');
// divide(6, 3, 4);

// isEven(4);
// isEven(5);
// isEven('a');
// isEven(4, 5);

// max(4, 5);
// max(5,'a');
// max('a', 'b');
// max(3);
// max(4, 5, 6);

// reverseString('hello');
// reverseString(123);
// reverseString('h');
// reverseString('hello', 'world');
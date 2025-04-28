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

module.exports = divide;
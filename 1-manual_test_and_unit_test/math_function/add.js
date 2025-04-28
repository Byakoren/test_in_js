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

module.exports = add;
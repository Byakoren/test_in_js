const multiply = require('../math_function/multiply');

test('multiply 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('multiply -2 * 3 to equal -6', () => {
    expect(multiply(-2, 3)).toBe(-6);
});

test('multiply 0 * 3 to equal 0', () => {
    expect(multiply(0, 3)).toBe(0);
});

test('multiply 3.5 * 2 to equal 7', () => {
    expect(multiply(3.5, 2)).toBe(7);
});

test('throws error when argument is not a number', () => {
    expect(() => multiply('2', 3)).toThrow("Both arguments must be numbers");
    expect(() => multiply(2, '3')).toThrow("Both arguments must be numbers");
    expect(() => multiply('2', '3')).toThrow("Both arguments must be numbers");
});

test('throws error when arguments count is not 2', () => {
    expect(() => multiply(2)).toThrow("Only two arguments are allowed");
    expect(() => multiply(2, 3, 4)).toThrow("Only two arguments are allowed");
});
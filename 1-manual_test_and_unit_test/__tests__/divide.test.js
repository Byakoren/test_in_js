const divide = require('../math_function/divide');

test('divide 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('divide -6 / 3 to equal -2', () => {
    expect(divide(-6, 3)).toBe(-2);
});

test('divide 0 / 3 to equal 0', () => {
    expect(divide(0, 3)).toBe(0);
}),

test('divide 3.5 / 2 to equal 1.75', () => {
    expect(divide(3.5, 2)).toBe(1.75);
});

test('throws error when argument is not a number', () => {
    expect(() => divide('6', 3)).toThrow("Both arguments must be numbers");
    expect(() => divide(6, '3')).toThrow("Both arguments must be numbers");
    expect(() => divide('6', '3')).toThrow("Both arguments must be numbers");
});

test('throws error when arguments count is not 2', () => {
    expect(() => divide(6)).toThrow("Only two arguments are allowed");
    expect(() => divide(6, 3, 4)).toThrow("Only two arguments are allowed");
});
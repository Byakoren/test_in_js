const add = require('../math_function/add');


test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
});

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds 1.5 + 2.5 to equal 4', () => {
    expect(add(1.5, 2.5)).toBe(4);
});

test('throws error when argument is not a number', () => {
    expect(() => add('1', 2)).toThrow("Both arguments must be numbers");
    expect(() => add(1, '2')).toThrow("Both arguments must be numbers");
    expect(() => add('1', '2')).toThrow("Both arguments must be numbers");
});

test('throws error when arguments count is not 2', () => {
    expect(() => add(1)).toThrow("Only two arguments are allowed");
    expect(() => add(1, 2, 3)).toThrow("Only two arguments are allowed");
});
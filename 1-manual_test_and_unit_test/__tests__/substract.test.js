const substract = require('../math_function/substract');

test('substract 5 - 3 to equal 2', () => {
    expect(substract(5, 3)).toBe(2);
});

test('substract -5 - 3 to equal -8', () => {
    expect(substract(-5, -3)).toBe(-2);
});


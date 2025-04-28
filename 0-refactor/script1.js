function generateSpaces(count) {
    return ' '.repeat(count);
}

function generateStars(count) {
    return '*'.repeat(count);
}

function printPyramidRow(spaces, stars) {
    console.log(spaces + stars);
}

function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
        const spaces = generateSpaces(height - i);
        const stars = generateStars(2 * i - 1);
        printPyramidRow(spaces, stars);
    }
}


function printReversePyramid(height) {
    for (let i = height; i >= 1; i--) {
        const spaces = generateSpaces(height - i);
        const stars = generateStars(2 * i - 1);
        printPyramidRow(spaces, stars);
    }
}


printPyramid(6);
printReversePyramid(6);


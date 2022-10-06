// Write a function that checks if a given matrix of numbers is magical. A matrix is magical 
// if the sums of the cells of every row and every column are equal. 
// Input
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// Output
// The output is a Boolean result indicating whether the matrix is magical or not.


function magicSquare(input) {
    let isMagic = true;

    let sumRow = row => input[row].reduce((a, b) => a + b);
    let sumCol = col => input.map(row => row[col]).reduce((a, b) => a + b);

    let targetSum = sumRow(0);

    for (let i = 1; i < input.length; i++) {
        if (sumRow(i) != targetSum) {
            isMagic = false;
        }
    }

    for (let j = 0; j < input.length; j++) {
        if (sumCol(j) != targetSum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

magicSquare([
        [1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]
    ]



);
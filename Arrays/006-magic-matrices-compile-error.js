// Write a function that checks if a given matrix of numbers is magical. A matrix is magical 
// if the sums of the cells of every row and every column are equal. 
// Input
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// Output
// The output is a Boolean result indicating whether the matrix is magical or not.


function magicSquare(input) {
    let isMagic = true;
    let targetSum = 0;

    for (let i = 0; i < input[0].length; i++) {
        targetSum += Number(input[0][i]);
    }


    // rows
    for (let i = 1; i < input.length; i++) {
        let sum = 0
        for (let j = 0; j < input[i].length; j++) {
            sum += Number(input[i][j]);
        }
        if (targetSum != sum) {
            isMagic = false;
        }
    }

    //columns
    for (let i = 0; i < input.length; i++) {
        let sum = 0;
        for (let j = 0; j < input[i].length; j++) {
            sum += Number(input[j][i]);
        }
        if (targetSum != sum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

magicSquare(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]




);
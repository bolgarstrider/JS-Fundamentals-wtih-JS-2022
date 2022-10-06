// Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
// Input
// The input comes as 2 numbers that represent the dimension of the matrix. 
// Output
// The output is the matrix filled spirally starting from 1. You need to print every row on a new line, 
// with the cells separated by a space. Check the examples below. 


// 1 -> 2 -> 3 -> 4 -> 5
//                     |
// 16->17 -> 18 -> 19  6
// |                |  |
// 15  24 ->  25   20  7
// |    |           |  |
// 14   23 <- 22 <- 21 8
// |                   |
// 13 <-12 <-11 <- 10  9


function solve(row, col) {
    let result = [];
    let counter = 1;
    let startCol = 0;
    let endCol = col - 1;
    let startRow = 0;
    let endRow = row - 1;
    //empty array of arrays
    for (let i = 0; i < row; i++) {

        result.push([]);

    }

   
    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }

        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }


    
    result = result.forEach(row => console.log(row.join(' ')));
    return result
}



console.log(solve(5, 5));
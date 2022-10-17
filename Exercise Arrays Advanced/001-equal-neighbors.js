// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs, you find and return it.


function equalNeighbors(matrix) {
    
    let counter = 0;

   
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row < matrix.length-1) {
                if (matrix[row][col] == matrix[row + 1][col]) {
                    counter++;
                }
            }
            if(col<matrix[row].length) {
                if (matrix[row][col] == matrix[row][col + 1]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter)
    // return counter;
    
}

equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '5', '5', '5']
]);
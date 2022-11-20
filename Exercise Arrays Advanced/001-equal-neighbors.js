
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
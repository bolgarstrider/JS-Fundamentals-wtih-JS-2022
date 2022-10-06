// You will be given an empty rectangular space of cells. Then you will be given the position of a star. 
// You need to build the orbits around it.
// You will be given a coordinate of a cell, which will always be inside the matrix,
//  on which you will put the value - 1. Then you must set the values of the cells directly surrounding that cell,
//   including the diagonals, to 2. After which you must set the values of the next surrounding cells to 3 and so on.
//    Check the pictures for more info.
// For example, we are given a matrix that has 5 rows and 5 columns and the star is at coordinates - 0, 0. Then the following should happen:
// 1	2	3	4	5
// 2	2	3	4	5
// 3	3	3	4	5
// 4	4	4	4	5
// 5	5	5	5	5

// If the coordinates of the star are somewhere in the middle of the matrix for example - 2, 2, then it should look like this:
// 3	3	3	3	3
// 3	2	2	2	3
// 3	2	1	2	3
// 3	2	2	2	3
// 3	3	3	3	3
// Input
// The input comes as an array of 4 numbers [width, height, x, y], which represents the dimensions of the matrix and the coordinates of the star.
// Output
// The output is the filled matrix, with the cells separated by a space, each row on a new line.


function orbit(arr) {
    let [row, column, startOrbitRow, starOrbitColumn] = arr; //-> destructuring of Arr
    //let row = arr.shift();
    //let column = arr.shift();
    //let startOrbitRow = arr.shift();
    //let starOrbitColumn = arr.shift();
    let orbitMatrix = [];
 
    for (let i = 0; i < row; i++) {
        orbitMatrix.push([]);
    }
 
    for (let rows = 0; rows < row; rows++) {
 
        for (let columns = 0; columns < column; columns++) {
            orbitMatrix[rows][columns] = Math.max(Math.abs(rows - startOrbitRow), Math.abs(columns - starOrbitColumn)) + 1
        }
    }
 
    console.log(orbitMatrix.map(rows => rows.join(" ")).join("\n"));
}

orbit([4, 4, 3, 3])
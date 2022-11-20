
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
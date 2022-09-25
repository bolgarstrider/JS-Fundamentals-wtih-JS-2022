// Write a function to print a chessboard of size n X n. See the example for more information.
// The input comes as a single number argument n.
// The output should be returned as a result of your function in the form of a string.
// works only with odd numbers

function chessBoard(num) {
    let size = Number(num);
    let color = 'black';
    

    console.log('<div class="chessboard">');
 
    for (let columns = 1; columns <= size; columns++) {
        console.log('  <div>');
 
        for (let rows = 1; rows <= size; rows++) {
            console.log(`    <span class="${color}"></span>`);
 
            
            color = color === 'black' ? 'white' : 'black';
        }
 
        console.log('  </div>');

        if (size % 2 === 0) {
           
            color = color === 'black' ? 'white' : 'black';
        }
    }
 
    console.log('</div>')
}

chessBoard(3)
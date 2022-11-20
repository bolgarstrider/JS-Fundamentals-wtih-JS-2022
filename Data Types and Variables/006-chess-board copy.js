
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
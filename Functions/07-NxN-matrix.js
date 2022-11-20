
function matrix(num){
    let row = [];
    let matrix = [];
    let element = num;
    for (let i = 0; i < num; i++) {
        row.push(num);
    }
    for (let j = 0; j < num; j++) {
        matrix.push(row.join(' '));
    }
    console.log(matrix.join(`\n`));
}

matrix(3);
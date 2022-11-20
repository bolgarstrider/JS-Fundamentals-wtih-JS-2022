
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
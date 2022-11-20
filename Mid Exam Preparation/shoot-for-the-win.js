

function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let shooted = 0;
    let index = 0;
    let shoots = input[index];
    index++; 

    while (shoots !== 'End') {
        let target= Number(shoots);
        if (targets[target] > -1) {
            shooted++;
            for (let i = 0; i < targets.length; i++) {
                if (i == target || targets[i] < 0) {
                    continue;
                }
                if (targets[i] > targets[target]) {
                    targets[i] -= targets[target];
                } else if (targets[i] <= targets[target]) {
                    targets[i] += targets[target];
                }
            }
            targets[target] = -1;

        }
        shoots = input[index];
        index++;
    }  
   
    console.log(`Shot targets: ${shooted} -> ${targets.join(' ')}`)
}

shootForTheWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
);
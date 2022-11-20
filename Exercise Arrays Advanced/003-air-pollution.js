
function airPollution(input, actions) {
    let map = input.map((a) => (a.split(' ')));

    //convert to numbers
    map.forEach(element => {
        let numEl = element.map(Number);
        map.splice(map.indexOf(element), 1, numEl);

    });

    while (actions.length > 0) {
        let currentAction = actions.shift().split(' ');
        let aim = Number(currentAction[1]);

        switch (currentAction[0]) {
            case 'breeze':
                for (let j = 0; j < 5; j++) {
                    map[aim][j] = Math.max(0, (map[aim][j] - 15))
                }
                break;
            case 'gale':
                for (let i = 0; i < 5; i++) {
                    map[i][aim] = Math.max(0, (map[i][aim] - 20));
                }
                break;
            case 'smog':
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        map[i][j] += aim;
                    }
                }
                break;
        }
    }

    let polluted = [];
    for (let i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if (map[i][j] >= 50) {
                polluted.push(`[${i}-${j}]`)
            }
        }
    }

    if (polluted.length < 1) {
        console.log('No polluted areas')
    } else {
        console.log(`Polluted areas: ${polluted.join(', ')}`)
    }
}



airPollution([
        '5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'
    ],
    ['breeze 1', 'gale 2', 'smog 25']

);
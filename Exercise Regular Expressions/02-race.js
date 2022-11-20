
function race(input) {
    const racers = input.shift().split(', ');
    const patternName = /[A-Za-z]+/g;
    const patternDistance = /\d/g;

    let winners = {};

    let distance = 0;

    let command = input.shift();

    while (command !== 'end of race') {

        let currentName = command.match(patternName).join('');

        if (racers.includes(currentName)) {
            let currentDistance = command.match(patternDistance)
                .map(a => Number(a))
                .reduce((a, b) => a + b, 0);


            if (!winners.hasOwnProperty(currentName)) {
                winners[currentName] = currentDistance;
            } else {
                winners[currentName] += currentDistance;
            }
        }

        command = input.shift();
    }




    let sorted = Object.entries(winners).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
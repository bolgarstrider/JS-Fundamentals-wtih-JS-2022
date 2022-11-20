

function counterStrike(input) {
    let energy = Number(input.shift());
    let command = input.shift();
    let winsCount = 0;
    let dead = 0;

    while (command !== 'End of battle') {
        
        let distance = Number(command);
        if(energy >= distance) {
            energy -= distance;
            winsCount++;
        } else {
            console.log(`Not enough energy! Game ends with ${winsCount} won battles and ${energy} energy`);
            dead++;
            break;
        }

        if (winsCount % 3 ==0) {
            energy += winsCount;
        }

        command = input.shift();
    }
    if(dead < 1) {
        console.log(`Won battles: ${winsCount}. Energy left: ${energy}`)
    }
}

counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"])
);
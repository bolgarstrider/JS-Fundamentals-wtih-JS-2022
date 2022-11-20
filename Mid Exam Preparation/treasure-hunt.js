

function treasureHunt(input) {
    let loot = input.shift().split('|');

    let commandLine = input.shift();

    while (commandLine !== 'Yohoho!') {
        let command = commandLine.split(' ');
        let action = command.shift();

        if (action == 'Loot') {
            while (command.length > 0) {
                let item = command.shift();
                if (!loot.includes(item)) {
                    loot.unshift(item);
                }
            }

        } else if (action == 'Drop') {
            let index = Number(command.shift());
            if (loot[index]) {
                loot.push(loot.splice(index, 1)[0]);
            }


        } else if (action == 'Steal') {
            let count = Number(command.shift());
            let startIndex = Math.max((loot.length - count), 0);
            let steal = loot.splice(startIndex);
            console.log(steal.join(', '));

        }
        commandLine = input.shift();
    }

    if (loot.length > 0) {
        let sum = 0
        for (const el of loot) {
            sum += el.length;
        }
        let result = (sum / loot.length).toFixed(2);
        console.log(`Average treasure gain: ${result} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }


}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 9",
"Yohoho!"])
);
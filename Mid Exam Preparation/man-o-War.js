


function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    const maxHealth = Number(input.shift());

    let battle = input.shift();

    while (battle !== 'Retire') {
        let commands = battle.split(' ');
        let command = commands[0];
        let index = Number(commands[1]);

        switch (command) {
            case 'Fire':
                let damage = Number(commands[2]);
                if (warShip[index]) {
                    warShip[index] -= damage;
                    if (warShip[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;

            case 'Defend':
                let secondIndex = Number(commands[2]);
                let damageTaken = Number(commands[3]);
                if (pirateShip[index] && pirateShip[secondIndex]) {
                    for (let i = index; i <= secondIndex; i++) {
                        pirateShip[i] -= damageTaken;
                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.')
                            return;
                        }
                    }
                }
                break;

            case 'Repair':
                let repair = Number(commands[2]);
                if (pirateShip[index]) {
                    pirateShip[index] += repair;
                    if (pirateShip[index] > maxHealth) {
                        pirateShip[index] = maxHealth;
                    }

                }
                break;
            case 'Status':
                let count = 0;
                for (const el of pirateShip) {
                    if (el < 0.2 * maxHealth) {
                        count++
                    }
                }                
                console.log(`${count} sections need repair.`)
                break;
        }

        battle = input.shift();
    }

    let pirateSum = 0;
    let warSum = 0;
    pirateShip.forEach(element => pirateSum += element);
    warShip.forEach(element => warSum += element);

  

    console.log(`Pirate ship status: ${pirateSum}\nWarship status: ${warSum}`)
}

manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]));
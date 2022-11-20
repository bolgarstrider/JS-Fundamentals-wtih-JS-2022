

function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let room = 0
    input = input.split('|');
    

    while (input.length > 0) {
        let commandLine = input.shift();
        let command = commandLine.split(' ')[0];
        let value = Number(commandLine.split(' ')[1]);
        room++;
        

        if (command == 'potion') {
            if ((health + value) <= 100) {
                health += value;
                console.log(`You healed for ${value} hp.`);
            } else {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`)
                return;
            }
        }
        
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`)

}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
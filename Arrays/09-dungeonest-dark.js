

function dungeonestDark(array) {

    let rooms = array[0].split('|');
    let health = 100;
    let coins = 0;
    let roomReached = 1;

    for (let room of rooms) {
        
        if (room.includes('potion')) {
            let item = room.split(' ');
            let healing = Number(item[1]);
            health += healing;
            if (health > 100) {
                healing = healing - (health - 100);
                health = 100;
            }
            console.log(`You healed for ${healing} hp.`)
            console.log(`Current health: ${health} hp.`)
            roomReached++;
        } else if (room.includes('chest')) {
            let item = room.split(' ');
            coins += Number(item[1]);
            console.log(`You found ${item[1]} coins.`)
            roomReached++;
        } else {
            let monster = room.split(' ');
            health -= Number(monster[1]);
            if (health > 0) {
                console.log(`You slayed ${monster[0]}.`);
                roomReached++;
            } else {
                console.log(`You died! Killed by ${monster[0]}.`);
                console.log(`Best room: ${roomReached}`);
                break;
            }
        }
    }

    if (roomReached == rooms.length + 1) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
       
    }

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110|bivol 66"]);
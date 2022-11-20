
function houseParty(array) {
    let guests = [];
    let i = 0;
    while (array.length > 0) {
        let command = array.shift().split(' ');
        let name = command[0];



        if (!guests.includes(name) && !command.includes('not')) {
            guests.push(name);
        } else if (!guests.includes(name) && command.includes('not')) {
            console.log(`${name} is not in the list!`)
        } else if (guests.includes(name) && command.includes('not')) {
            guests = guests.filter((a) => a !== name);
        } else if (guests.includes(name) && !command.includes('not')) {
            console.log(`${name} is already in the list!`)
        }
        i++;
    }

    console.log(guests.join(`\n`));

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);
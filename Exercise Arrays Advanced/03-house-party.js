// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list
//  (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list 
// (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.


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
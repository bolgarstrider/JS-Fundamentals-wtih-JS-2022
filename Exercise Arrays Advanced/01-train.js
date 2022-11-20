
function train(array) {
    let wagons = array.shift().split(' ').map(Number);
    let passLimit = Number(array.shift());


    while (array.length > 0) {
        let command = array.shift().split(' ');
        if (command.includes('Add')) {
            wagons.push(Number(command[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                newPass = Number(command[0]);
                if ((wagons[i] + newPass) <= passLimit) {
                    wagons[i] += newPass;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])
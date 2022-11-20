

function arrayManipulations(arr) {
    let numbers = arr.shift().split(' ');
    

    while (arr.length > 0) {
        let command = arr.shift().split(' ');
        if (command.includes('Add')) {
            numbers.push(command[1]);
        } else if (command.includes('Remove')) {
            numbers = numbers.filter(x => x !== command[1]);
        } else if (command.includes('RemoveAt')) {
            numbers.splice(command[1], 1);
        } else if (command.includes('Insert')) {
            numbers.splice(command[2], 0, command[1]);
        }
    }

    console.log(numbers.join(' '));

}

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]);
// Write a function that manipulates an array of numbers. 
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate.
//  Every other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.


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
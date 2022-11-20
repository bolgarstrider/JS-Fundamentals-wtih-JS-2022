
function arrayModifier(input) {
    let array = input.shift().split(' ').map(Number);
    let commandLine = input.shift();

    while (commandLine !== 'end') {
        commandLine = commandLine.split(' ');
        let command = commandLine[0];
        let firstIndex = commandLine[1];
        let secondIndex = commandLine[2];
        let temp = 0;

        if (command == 'swap') {
            temp = array[firstIndex];
            array[firstIndex] = array[secondIndex];
            array[secondIndex] = temp;



        } else if (command == 'multiply') {
            temp = array[firstIndex] * array[secondIndex];
            array[firstIndex] = temp;

        } else if (command == 'decrease') {
            array = array.map(x => x -= 1);
        }

        commandLine = input.shift();
    }

    console.log(array.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
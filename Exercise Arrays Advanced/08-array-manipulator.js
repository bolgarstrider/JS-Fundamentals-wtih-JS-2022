

function arrayManipulator(numbers, actions) {
    while (actions.length > 0) {
        let command = actions.shift().split(' ');

        if (command[0] == 'add') {
            let index = Number(command[1]);
            let element = Number(command[2]);
            numbers.splice(index, 0, element);

        } else if (command[0] == 'addMany') {
            let index = Number(command[1]);
            for (let i = 2; i < command.length; i += 1) {
                let element = Number(command[i]);
                numbers.splice(index, 0, element)
                index++;
            }

        } else if (command[0] == 'contains') {
            let element = Number(command[1]);
            console.log(numbers.indexOf(element));

        } else if (command[0] == 'remove') {
            let index = Number(command[1]);
            numbers.splice(index, 1);

        } else if (command[0] == 'shift') {
            let positions = Number(command[1]);
            for (let i = 0; i < positions; i++) {
                numbers.push(numbers.shift()); //////////////////// moves left
            }

        } else if (command[0] == 'sumPairs') {
            let temp = numbers.slice(0);
            numbers.length = 0;
            if (temp.length % 2 == 0) {
                for (let i = 0; i < temp.length; i += 2) {
                    numbers.push(temp[i] + temp[i + 1]);
                }
            } else {
                for (let i = 0; i < temp.length - 1; i += 2) {
                    numbers.push(temp[i] + temp[i + 1]);
                }
                numbers.push(temp[temp.length - 1]);
            }
        } else if (command[0] == 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
        }

    }

    //console.log(`[ ${numbers.join(', ')} ]`);
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']


)
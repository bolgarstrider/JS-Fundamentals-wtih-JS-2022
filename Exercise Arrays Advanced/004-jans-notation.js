
function jansNotation(input) {
    let numbers = [];
    

    while (input.length > 0) {
        let command = input.shift();

        if (typeof command == 'number') {
            numbers.unshift(command);
        } else {
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
               
                return;
            }
            switch (command) {
                case '+':
                    numbers.splice(0, 2, (numbers[1] + numbers[0]));
                    break;
                case '-':
                    numbers.splice(0, 2, (numbers[1] - numbers[0]));
                    break;
                case '*':
                    numbers.splice(0, 2, (numbers[1] * numbers[0]));
                    break;
                case '/':
                    numbers.splice(0, 2, (numbers[1] / numbers[0]));
                    break;
            }
        }
    }

    if (numbers.length < 2) {
        console.log(numbers.join(''));
    } else {
        console.log('Error: too many operands!')
    }
}

jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
   );
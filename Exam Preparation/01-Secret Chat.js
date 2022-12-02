
function secretChat(input) {
    let message = input.shift();

    let currentLine = input.shift();

    while (currentLine !== 'Reveal') {
        const tokens = currentLine.split(':|:');
        const command = tokens[0];

        switch (command) {
            case 'InsertSpace':
                const index = Number(tokens[1]);
                message = message.substring(0, index) + ' ' + message.substring(index);
                console.log(message);
                break;

            case 'Reverse':
                const toReverse = tokens[1];

                if (message.includes(toReverse)) {
                    let reversed = toReverse.split('').reverse().join('');
                    message = message.replace(toReverse, '');
                    message = message.concat(reversed);
                    console.log(message);
                } else {
                    console.log('error');
                }

                break;

            case 'ChangeAll':
                const toReplace = tokens[1];
                const replacer = tokens[2];

                while (message.includes(toReplace)) {
                    message = message.replace(toReplace, replacer);
                }
                console.log(message);

                break;
        }
        currentLine = input.shift();
    }

    console.log(`You have a new text message: ${message}`)
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
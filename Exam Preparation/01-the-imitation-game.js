

function theImitationGame(input) {
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Decode') {
        const line = command.split('|');
        const action = line.shift();

        if (action === 'Move') {
            const numChars = Number(line.shift());
            const moving = message.slice(0, numChars);
            message = message.slice(numChars).concat(moving);
            

        } else if (action === 'Insert') {
            const index = Number(line.shift());
            const value = line.shift();
            const firstPart = message.slice(0, index);
            message = firstPart.concat(value).concat(message.slice(index));
            

        } else if (action === 'ChangeAll') {
            const toReplace = line.shift();
            const repalceWith = line.shift();
            while (message.includes(toReplace)) {
                message = message.replace(toReplace, repalceWith);
            }
            

        }

        command = input.shift();
    }

    console.log(`The decrypted message is: ${message}`)
}

theImitationGame([
    'zozoHe',
    'ChangeAll|zo|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  
);



function passwordReset(input) {
    let rawPassword = input.shift();

    let command = input.shift();

    while (command !== 'Done') {
        let [action, argument1, argument2] = command.split(' ');

        switch (action) {
            case 'TakeOdd':
                let newPassword = '';
                for (let i = 1; i < rawPassword.length; i+=2) {
                    newPassword += rawPassword[i];
                }
                rawPassword = newPassword;
                console.log(rawPassword);
                break;

            case 'Cut':
                const startIndex = Number(argument1);
                const endIndex = startIndex + Number(argument2);
                const replacer = rawPassword.substring(startIndex, endIndex)
                rawPassword = rawPassword.replace(replacer, '');
                console.log(rawPassword);
                break;

            case 'Substitute':
                if (rawPassword.includes(argument1)){
                    while(rawPassword.includes(argument1)) {
                        rawPassword = rawPassword.replace(argument1, argument2);
                    }
                    console.log(rawPassword);
                } else {
                    console.log('Nothing to replace!');
                    
                }
                
                break;
        }

        command = input.shift();
    }

    console.log(`Your password is: ${rawPassword}`)
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]));
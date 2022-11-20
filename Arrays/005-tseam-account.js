
function tseamAccaount(array) {
    let index = 0;
    let account = array[index].split(' ');
    index++;
    let command = array[index];
    index++;

    while (command != 'Play!') {
        if (command.includes('Install')) {
            // split the element at '  '  - Install something -> game[0] = Install, game[1] = something
            let game = array[index - 1].split(' ');
            if (!(account.includes(game[1]))) {
                account.push(game[1]);
            }
            command = array[index];
            index++;


        } else if (command.includes('Uninstall')) {
            let game = array[index - 1].split(' ');
            if (account.includes(game[1])) {
                for (let i = 0; i < account.length; i++) {
                    if (account[i] == game[1]) {
                        //swap element at i positon, swap 1 element, nothing added
                        account.splice(i, 1);
                    }
                }
            }
            command = array[index];
            index++;

        } else if (command.includes('Update')) {
            let game = array[index - 1].split(' ');
            if (account.includes(game[1])) {
                for (let i = 0; i < account.length; i++) {
                    if (account[i] == game[1]) {
                        //removes 1 element at i index
                        account.splice(i, 1,);
                        //push game 1 at the end
                        account.push(game[1]);
                        break;
                    }
                }
            }
            command = array[index];
            index++;

        } else if (command.includes('Expansion')) {
            let game = array[index - 1].split(' ');
            let gameExpansion = game[1].toString().split('-');           

            if (account.includes(gameExpansion[0])) {
                for (let i = 0; i < account.length; i++) {
                    if (account[i] == gameExpansion[0]) {
                        //insert an element at i+1 without removing another
                        account.splice(i+1, 0, gameExpansion.join(':'));
                        break;
                    }
                }
            }
            command = array[index];
            index++;
        }
    }

    console.log(account.join(' '));
}

tseamAccaount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);
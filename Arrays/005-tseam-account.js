// As a gamer, Peter has Tseam Account. He loves to buy new games. 
// You are given Peter's account with all of his games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does with his account.
// You may receive the following commands:
// •	Install {game} - add the game at the last position in the account,
//  but only if it isn't installed already.
// •	Uninstall {game} - delete the game if it exists.
// •	Update {game} - update the game if it exists and place it in the last position.
// •	Expansion {game}-{expansion} - check if the game exists and insert after it 
// the expansion in the following format: "{game}:{expansion}";
// Input
// •	On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
// •	Until you receive "Play!" you will be receiving commands. 
// Output
// •	As output, you must print Peter`s Tseam account. 
// Constraints
// •	The command will always be valid.
// •	The game and expansion will be strings and will contain any character, except '-'.
// •	Allowed working time / memory: 100ms / 16MB.

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


function shoppingList(input) {
    let shoppingList = input.shift().split('!');
    let commandList = input.shift();

    while (commandList !== 'Go Shopping!') {
        let commands = commandList.split(' ');
        let command = commands[0];
        let item = commands[1];
        let newItem = commands[2];

        switch (command) {
            case 'Urgent':
                if (!shoppingList.includes(item)) {
                    shoppingList.unshift(item);
                }
                break;
            case 'Unnecessary':
                shoppingList = shoppingList.filter(x => x !== item);

                break;
            case 'Correct':
                if (shoppingList.includes(item)) {
                    let index = shoppingList.indexOf(item);
                    shoppingList[index] = newItem;
                }
                break;
            case 'Rearrange':
                if (shoppingList.includes(item)) {
                    let index = shoppingList.indexOf(item);

                    shoppingList.push(shoppingList.splice(index, 1)[0]);
                }
                break;
        }

        commandList = input.shift();
    }
    console.log(shoppingList.join(', '))
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
])


;
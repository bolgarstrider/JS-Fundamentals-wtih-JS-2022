// It's the end of the week, and it is time for you to go shopping, so you need to create a shopping list first.
// Input
// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. 
// Otherwise, skip this command.
// Constraints
// •	There won't be any duplicate items in the initial list
// Output
// •	Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"


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
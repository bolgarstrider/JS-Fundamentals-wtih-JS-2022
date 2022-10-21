// As a young traveler, you gather items and craft new items.
// Input / Constraints
// You will receive a journal with some collecting items, separated with a comma and a space (", "). 
// After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// •	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
// •	"Drop - {item}" - you should remove the item from your inventory if it exists.
// •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. 
// Otherwise, ignore the command.
// •	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".


function inventory(input) {
    let inventory = input.shift().split(', ');
    let command = input.shift().split(` - `);


    while (command[0] !== 'Craft!') {
        let action = command[0];
        let item = command[1];
        switch (action) {
            case 'Collect':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Drop':
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case 'Combine Items':
                let oldItem = item.split(':')[0];
                let newItem = item.split(':')[1];
                if (inventory.includes(oldItem)) {
                    inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (inventory.includes(item)) {
                    inventory.push(inventory.splice(inventory.indexOf(item), 1)[0]);
                }
                break;
        }
        command = input.shift().split(` - `);
    }
    console.log(inventory.join(', '));
}



inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'

]);
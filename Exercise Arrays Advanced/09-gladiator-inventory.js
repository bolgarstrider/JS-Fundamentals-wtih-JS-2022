// As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. 
// You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
// You may receive the following commands:
// •	Buy {equipment}
// •	Trash {equipment}
// •	Repair {equipment}
// •	Upgrade {equipment}-{upgrade}
// If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
// If you receive the Trash command, delete the equipment if it exists.
// If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
// If you receive the Upgrade command, you should check if the equipment exists and insert after it 
// the upgrade in the following format: "{equipment}:{upgrade}".
// Input / Consrtaints
// You will receive an array of strings. Each element of the array is a command.
// •	In the first input element, you will receive Peter's inventory – a sequence of equipment names, separated by space.
// Output
// As output, you must print Peter's inventory on one line, separated by a space. 
// Constraints
// •	The command will always be valid.
// •	The equipment and Upgrade will be strings and will contain any character, except '-'.
// •	Allowed working time / memory: 100ms / 16MB.


function gladiatorInventory(input) {

    let inventory = input.shift().split(' ');



    while (input.length > 0) {
        let command = input.shift().split(' ');
        let action = command[0];
        let item = command[1];
        if (action == 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (action == 'Trash') {
            if (inventory.includes(item)) {
                inventory = inventory.filter(a => a !== item);
            }
        } else if (action == 'Repair') {
            if (inventory.includes(item)) {
                let repairedItem = inventory.filter(a => a == item)
                inventory = inventory.filter(a => a !== item);
                inventory.push(repairedItem[0]);
            }
        } else if (action == 'Upgrade') {
            let upgrade = item.split('-');
            item = upgrade[0];
            let uItem = upgrade.join(':');

            if (inventory.includes(item)) {
                let upgradeIndex = inventory.indexOf(item);
                inventory.splice(upgradeIndex + 1, 0, uItem);
            }
        }
    }


    console.log(inventory.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]);
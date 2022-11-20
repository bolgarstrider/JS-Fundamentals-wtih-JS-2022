
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
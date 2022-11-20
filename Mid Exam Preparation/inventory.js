
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
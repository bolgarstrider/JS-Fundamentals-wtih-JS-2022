function storage(input) {
    let storage = {};

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if(storage[product]) {
            quantity += storage[product];
        }

        storage[product] = quantity;
    }

    for (let key in storage) {
        console.log(`${key} -> ${storage[key]}`)
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
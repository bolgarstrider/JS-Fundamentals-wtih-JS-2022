function storage(input) {
    let storage = new Map();
    
    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (storage.has(product)) {
            quantity += storage.get(product);
        }

        storage.set(product, quantity);
    }

    // let storageArray = Array.from(storage.entries());
    

    // storageArray.forEach(element => console.log(`${element[0]} -> ${element[1]}`))

    for (let kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
    
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
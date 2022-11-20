
function storeProvision(stock, ordered) {

    let store = {};
    const stockLength = stock.length;
    const orderedLength = ordered.length;
    for (let i = 0; i < stockLength; i += 2) {
        let currentProduct = stock[i];
        store[currentProduct] = Number(stock[i + 1]);

    }


    for (let i = 0; i < orderedLength; i += 2) {
        let currentProduct = ordered[i];


        if (!store.hasOwnProperty(currentProduct)) {
            store[currentProduct] = 0;
        }

        store[currentProduct] += Number(ordered[i + 1]);

    }

    for (const key in store) {
       console.log(`${key} -> ${store[key]}`);
       
    }

}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
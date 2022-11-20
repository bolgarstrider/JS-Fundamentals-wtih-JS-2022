

function furniture(input) {

    const pattern = /[>]{2}(?<product>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[0-9]+)!(?<quantity>[0-9]+)/gm;
    let total = 0;
    let products = [];

    // let command = input.shift();
    let index = 0


    while (input[index] !== 'Purchase') {

        let row = input[index]

        let current = pattern.exec(row);


        while (current !== null) {
            const product = current.groups['product'];
            products.push(product);
            const price = Number(current.groups['price']);
            const quantity = Number(current.groups['quantity']);
            total += price * quantity;

            // console.log(`${product} ${price} ${quantity}`)
            current = pattern.exec(row);
        }

        index++;
    }


    console.log(`Bought furniture:`);
    products.forEach(element => {
        console.log(element);
    });
    console.log(`Total money spend: ${total.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<312.23!3',
    '>>TV<<312.23!3',
    '>>TV<<312.23!3',
    '>>TV<<312.23!3',
    '>Invalid<<!5',
    'Purchase'
]);
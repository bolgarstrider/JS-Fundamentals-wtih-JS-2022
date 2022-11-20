


function computerStore(input) {

    let price = 0;

    let sale = input.shift();



    while (sale !== 'regular' && sale !== 'special') {
        if (sale < 0) {
            console.log('Invalid price!');
        } else {
            price += Number(sale);
        }

        sale = input.shift();
    }


    let tax = price * 0.2;
    let total = price + tax;
    if (sale == 'special') {
        total *= 0.9;
    }
    
    if (total <= 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`)
        console.log(`Taxes: ${tax.toFixed(2)}$`)
        console.log('-----------')
        console.log(`Total price: ${total.toFixed(2)}$`);
    }    
}

computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]));
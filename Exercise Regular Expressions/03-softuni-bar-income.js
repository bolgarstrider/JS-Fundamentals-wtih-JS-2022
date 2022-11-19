


function softUniBarIncome(input) {

    const pattern = /%(?<customer>[A-Z][a-z]+)%[^0-9\|$%.]*<(?<product>\w+)>[^0-9\|$%.]*\|(?<count>\d+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/gm;

    let total = 0;

    let command = input.shift();

    while (command !== 'end of shift') {
        let current = pattern.exec(command);

        while (current !== null) {
            const currentCustomer = current.groups['customer'];
            const currentProduct = current.groups['product'];
            const currentCount = Number(current.groups['count']);
            const currentPrice = Number(current.groups['price']);
            const totalPrice = currentCount * currentPrice;

            total += totalPrice;

            console.log(`${currentCustomer}: ${currentProduct} - ${totalPrice.toFixed(2)}`);

            current = pattern.exec(command);
        }

        command = input.shift();
    }

    console.log(`Total income: ${total.toFixed(2)}`)
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']

);
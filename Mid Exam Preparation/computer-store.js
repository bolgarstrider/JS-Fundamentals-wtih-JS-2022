// Write a program that prints you a receipt for your new computer. You will receive the parts' prices (without tax)
//  until you receive what type of customer this is - special or regular. Once you receive the type of customer you should print the receipt.
// The taxes are 20% of each part's price you receive. 
// If the customer is special, he has a 10% discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.
// Input
// •	You will receive numbers representing prices (without tax) until command "special" or "regular":
// Output
// •	The receipt should be in the following format: 
// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"
// Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only on the total price. 
// Discount is only applicable to the final price!


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
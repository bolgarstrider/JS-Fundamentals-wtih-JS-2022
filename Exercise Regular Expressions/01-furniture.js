// Write a function to calculate the total cost of different types of furniture. 
// You will be given some lines of input until you receive the line "Purchase". 
// For the line to be valid it should be in the following format:
// ">>{furniture name}<<{price}!{quantity}"
// The price can be a floating-point number or a whole number. 
// Furniture items must start with a capital letter. Store the names of the furniture and the total price. 
// At the end print each bought furniture on a separate line in the format:
// "Bought furniture:
// {1st name}
// {2nd name}
// …"
// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second decimal point.
// If there are not valid furniture print only:
// Bought furniture:
// Total money spend: {spend money}


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
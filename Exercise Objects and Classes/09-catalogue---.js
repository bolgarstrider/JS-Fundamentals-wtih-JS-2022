// You have to create a sorted catalog of store products. You will be given the products’ names and prices.
// You need to order them in alphabetical order. 
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
// You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. 
// The products must be divided into groups, by the initial of their name. The group's initial should be printed, 
// and after that, the products should be printed with 2 spaces before their names. For more info check the examples.


function solve(input) {
    const catalog = {};

    for (let line of input) {
        
        const [product, price] = line.split(' : ');
        const letter = product[0];

        if (catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }

        catalog[letter][product] = price;
    }

    const sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(catalog[key])
            .sort((a, b) => a.localeCompare(b));

        for (let keyP of sortedProducts) {
            console.log(`  ${keyP}: ${catalog[key][keyP]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
// You are given an array of strings. Every odd string is representing a resource 
// (e.g. Gold, Silver, Copper, and so on), and every even – quantity. 
// Your task is to collect the resources and print them each on a new line. 
// Print the resources and their quantities in the format:
// {resource} –> {quantity}
// The quantities inputs will be in the range [1 … 2 000 000 000].

function aMinerTask(input) {
    const storage = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!storage[resource]) {
            storage[resource] = quantity;
        } else {
            storage[resource] += quantity;
        }
    }

    for (const key of Object.keys(storage)) {
        console.log(`${key} -> ${storage[key]}`)
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);
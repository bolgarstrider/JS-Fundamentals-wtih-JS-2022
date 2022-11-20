
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
// Write a function that stores cars in garages. You will be given an array of strings. 
// Each string will contain a number of a garage and info about a car. You have to store the car (with its info) in the given garage. 
// The info about the car will be in the format:
//  "{key1}: {value1}, {key2}: {value2}…"
// If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format:
// "Garage № {number}:
// --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
// --- {the same for the next car}
// Garage № {number}: …"

function garage(input) {
    let garages = {}

    for (let row of input) {
        let [garage, carKeyValues] = row.split(' - ');
        let availableCars = [];

        if (!garages.hasOwnProperty(garage)) {
            availableCars.push(carKeyValues);
            garages[garage] = availableCars;

        } else {
            availableCars = garages[garage];
            availableCars.push(carKeyValues);
            garages[garage] = availableCars;
        }
    }

    for (const key in garages) {
        console.log(`Garage № ${key}`);
        let output = '--- '
        let carProperties = garages[key]
        for (let element of carProperties) {

            for (let everySymbol of element) {
                element = element.replace(': ', ' - ')

            }
            console.log(`--- ${element}`)
        }

    }

}


garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
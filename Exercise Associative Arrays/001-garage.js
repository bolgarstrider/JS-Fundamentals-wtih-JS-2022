
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
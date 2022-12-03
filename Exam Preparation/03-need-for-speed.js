
function needForSpeed(input) {
    const num = input.shift();
    let carsArray = [];
    let car = {};

    for (let i = 0; i < num; i++) {
        let [car, mileage, fuel] = input.shift().split('|');

        car = {
            car: car,
            mileage: Number(mileage),
            fuel: Number(fuel)
        }

        carsArray.push(car);
    }

    let currentLine = input.shift();

    while (currentLine !== 'Stop') {
        const tokens = currentLine.split(' : ')
        const command = tokens[0];
        const car = tokens[1];

        const result = carsArray.find(x => x.car == car);
        const indexRes = carsArray.indexOf(result);

        let miles;
        let fuel;

        switch (command) {
            case 'Drive':
                miles = Number(tokens[2]);
                fuel = Number(tokens[3]);

                if (carsArray[indexRes].fuel >= fuel) {
                    carsArray[indexRes].fuel -= fuel;
                    carsArray[indexRes].mileage += miles;
                    console.log(`${car} driven for ${miles} kilometers. ${fuel} liters of fuel consumed.`);
                } else {
                    console.log('Not enough fuel to make that ride');
                }

                if (carsArray[indexRes].mileage >= 100000) {
                    carsArray.splice(indexRes, 1);
                    console.log(`Time to sell the ${car}!`);
                }

                break;

            case 'Refuel':
                fuel = Number(tokens[2]);

                if ((carsArray[indexRes].fuel + fuel) > 75) {
                    fuel = 75 - carsArray[indexRes].fuel;
                    carsArray[indexRes].fuel = 75;

                } else {
                    carsArray[indexRes].fuel += fuel;
                }
                console.log(`${car} refueled with ${fuel} liters`)
                break;

            case 'Revert':
                miles = Number(tokens[2]);
                carsArray[indexRes].mileage -= miles;
                console.log(`${car} mileage decreased by ${miles} kilometers`);
                if (carsArray[indexRes].mileage < 10000) {
                    carsArray[indexRes].mileage = 10000;
                }

                break;
        }

        currentLine = input.shift();
    }

    for (const car of carsArray) {
        console.log(`${car.car} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`)
    }
}


needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
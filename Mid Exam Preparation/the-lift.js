
function theLift(input) {
    const limit = 4;
    let people = Number(input[0]);
    let wagons = input[1].split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < limit) {
            let freespace = limit - wagons[i];
            let onboard = Math.min(freespace, people)
            people -= onboard;
            wagons[i] += onboard;
        }

        if (people <= 0) {
            break;
        }

    }
    let freeWagons = 0;
    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] !== 4){
            freeWagons++;
        }
    }

    if (people != 0) {
        console.log(`There isn't enough space! ${people} people in a queue!\n${wagons.join(' ')}`);

    } else if (freeWagons != 0) {
        console.log(`The lift has empty spots!\n${wagons.join(' ')}`);
    } else {
        console.log(`${wagons.join(' ')}`)
    }

}

theLift([
        "10",
        "0 2 0"
    ]

);
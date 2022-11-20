

function plantDiscovery(input) {
    const numberOfPlants = input.shift();
    let plantRarity = {};
    let plantRating = {};

    for (let i = 1; i <= numberOfPlants; i++) {
        let currentRow = input.shift().split('<->');
        const currentPlant = currentRow[0];
        const currentRarity = currentRow[1];

        if (!plantRarity.hasOwnProperty(currentPlant)) {
            plantRarity[currentPlant] = currentRarity;
            plantRating[currentPlant] = [];
        } else {
            plantRarity[currentPlant] = currentRarity;
        }
    }

    let command = input.shift();

    while (command !== 'Exhibition') {
        let currentRow = command.split(' - ');
        const currentRating = Number(currentRow[1]);
        const currentAction = currentRow[0].split(': ');
        const currentPlant = currentAction[1];

        if (!plantRating.hasOwnProperty(currentPlant)) {
            console.log('error');
        } else {
            if (currentAction.includes('Rate')) {
                plantRating[currentPlant].push(currentRating);
            } else if (currentAction.includes('Update')) {
                plantRarity[currentPlant] = currentRating;
            } else if (currentAction.includes('Reset')) {
                plantRating[currentPlant] = [];
            }
        }



        command = input.shift();
    }

    console.log('Plants for the exhibition:');

    for (const key in plantRating) {    
        
        console.log(`- ${key}; Rarity: ${plantRarity[key]}; Rating: ${average(plantRating[key]).toFixed(2)}`)
    }


    function average(arr) {
        if (!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Rate: Woodii - -1",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
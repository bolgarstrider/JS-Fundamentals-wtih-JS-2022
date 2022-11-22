

function pirates(input) {

    let settelments = {};

    let command = input.shift();

    while (command !== 'Sail') {
        const [town, population, gold] = command.split('||');
        if (!settelments.hasOwnProperty(town)) {
            settelments[town] = [Number(population), Number(gold)];
        } else {
            const newPopulation = settelments[town][0] + Number(population);
            const newGold = settelments[town][1] + Number(gold);

            settelments[town] = [newPopulation, newGold];
        }

        command = input.shift();
    }

    while (command !== 'End') {
        const town = command.split('=>')[1];
        if (command.includes('Plunder')) {
            const population = Number(command.split('=>')[2]);
            const gold = Number(command.split('=>')[3]);

            if (settelments.hasOwnProperty(town)) {

                const newPopulation = settelments[town][0] - population;
                const newGold = settelments[town][1] - gold;
                settelments[town] = [newPopulation, newGold];
                //to use Math.Abs if the Plunder is bigger than the present in the town
                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);

                if (settelments[town][0] <= 0 || settelments[town][1] <= 0) {
                    delete settelments[town];
                    console.log(`${town} has been wiped off the map!`);
                }

            }

        } else if (command.includes('Prosper')) {
            if (settelments.hasOwnProperty(town)) {
                const gold = Number(command.split('=>')[2]);

                if (gold >= 0) {
                    const newGold = settelments[town][1] + gold;
                    settelments[town] = [settelments[town][0], newGold];
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${newGold} gold.`)
                } else {
                    console.log('Gold added cannot be a negative number!')
                }
            }
        }

        command = input.shift();
    }

    const countTowns = Object.keys(settelments).length;
    if (countTowns > 0) {
        console.log(`Ahoy, Captain! There are ${countTowns} wealthy settlements to go to:`);
        for (const town in settelments) {
            console.log(`${town} -> Population: ${settelments[town][0]} citizens, Gold: ${settelments[town][1]} kg`)
        }

    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    }

}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);

pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]));
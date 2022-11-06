// Write a function that stores information about an army leader and his armies. The input will be an array of strings. 
// The strings can be in some of the following formats:
// "{leader} arrives" – add the leader (no army)
// "{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
// "{army name} + {army count}" – if the army exists somewhere add the count
// "{leader} defeated" – delete the leader and his army (if he exists)
// When finished reading the input sort the leaders by total army count in descending. 
// Then each army should be sorted by count in descending.
// Output
// Print in the following format:
// "{leader one name}: {total army count}

// >>> {armyOne name} - {army count}
// >>> {armyTwo name} - {army count}
//  …
// {leader two name}: {total army count}
// …"
// Constrains
// •	The new leaders will always be unique
// •	When adding a new army to the leader, the army will be unique


function armies(input) {
    let leaders = {};
    let armyLeaders = [];

    for (let line of input) {
        if (line.includes('arrives')) {
            let leader = line.split(' arrives')[0];
            if (!leaders.hasOwnProperty(leader)) {
                leaders[leader] = {
                    armiesName: {},
                    totalArmyCount: 0
                };
            }
            armyLeaders.push(leader);

        } else if (line.includes('defeated')) {

            let leader = line.split(' defeated')[0];
            let indexOfLeader = armyLeaders.indexOf(leader);
            if (leaders.hasOwnProperty(leader)) {
                delete leaders[leader];
                armyLeaders.splice(indexOfLeader, 1);
            }

        } else if (line.includes(':')) {
            let [leader, army] = line.split(': ');
            let [armyName, armyCount] = army.split(', ');
            if (leaders.hasOwnProperty(leader)) {
                if (!leaders[leader].armiesName.hasOwnProperty(armyName)) {
                    leaders[leader].armiesName[armyName] = Number(armyCount);
                    leaders[leader].totalArmyCount += Number(armyCount);
                }
            }
        } else if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');
            armyLeaders.forEach(leader => {
                for (let army in leaders[leader]) {
                    if (leaders[leader][army].hasOwnProperty(armyName)) {
                        leaders[leader].armiesName[armyName] += Number(
                            armyCount
                        );
                        leaders[leader].totalArmyCount += Number(armyCount);
                    }
                }
            });
        }
    }
   

    let sortedArmies = Object.entries(leaders).sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount);

    sortedArmies.forEach(army => {
        console.log(`${army[0]}: ${army[1].totalArmyCount}`);

        let sortedCount = Object.entries(army[1].armiesName).sort((a, b) => b[1] - a[1]);
        sortedCount.forEach(armyName => {
            console.log(`>>> ${armyName[0]} - ${armyName[1]}`)

        });

    });
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205'
]);
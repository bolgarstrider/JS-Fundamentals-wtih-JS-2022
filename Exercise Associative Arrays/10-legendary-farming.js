// You’ve beaten all the content and the last thing left to accomplish is to own a legendary item. 
// However, it’s a tedious process and requires quite a bit of farming. Anyway, you are not too pretentious 
// – any legendary will do. The possible items are:
// •	"Shadowmourne" – requires 250 Shards
// •	"Valanyr" – requires 250 Fragments
// •	"Dragonwrath" – requires 250 Motes
// "Shards", "Fragments", and "Motes" are the key materials, all else is junk. 
// You will be given lines of input in the format: 
// "{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}"
// Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, 
// print the corresponding legendary obtained. 
// Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, 
// then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.
// Input
// •	Each line comes in the following format:
// {quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}
// Output
// •	On the first line, print the obtained item in format: "{Legendary item} obtained!"
// •	On the next three lines, print the remaining key materials in descending order by quantity
// o	If two key materials have the same quantity, print them in alphabetical order
// •	On the final several lines, print the junk items in alphabetical order
// o	All materials are printed in format "{material}: {quantity}"
// o	All output should be lowercase, except the first letter of the legendary

function legendaryFarming(input) {
    let farm = input.split(' ').map((el, index) => {
        if (index % 2 === 0) {
            return el = Number(el);
        } else {
            return el.toLowerCase();
        };
    });

    let materialsCollected = {
        shards: 0,
        motes: 0,
        fragments: 0
    };

    let farmLength = farm.length;
    for (let i = 0; i < farmLength; i += 2) {
        let material = farm[i + 1];
        let count = farm[i];

        if (!materialsCollected.hasOwnProperty(material)) {
            materialsCollected[material] = count;
        } else {
            let oldCount = materialsCollected[material];
            count += oldCount;
            materialsCollected[material] = count;
        }

        for (const key in materialsCollected) {
            if (materialsCollected[key] >= 250) {
                switch (key) {
                    case 'motes':
                        console.log('Dragonwrath obtained!');
                        materialsCollected[key] -= 250;
                        output();
                        return;
                    case 'shards':
                        console.log('Shadowmourne obtained!');
                        materialsCollected[key] -= 250;
                        output();
                        return;
                    case 'fragments':
                        console.log('Valanyr obtained!');
                        materialsCollected[key] -= 250;
                        output();
                        return;

                }

            }
        }

    }

    function output() {
        let entries = Object.entries(materialsCollected);

        let resourses = entries.filter(a => a.includes('motes') || a.includes('shards') || a.includes('fragments'))
            .sort((x, y) => {
                
                if (x[1] == y[1]) {
                    return x[0].localeCompare(y[0]);
                } else {
                    return y[1] - x[1];
                }
            });
        let junk = entries.filter(a => !a.includes('motes') && !a.includes('shards') && !a.includes('fragments'))
            .sort((x, y) => x[0].localeCompare(y[0]));

        resourses.forEach(el => console.log(`${el[0]}: ${el[1]}`));
        junk.forEach(el => console.log(`${el[0]}: ${el[1]}`));
    }



}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
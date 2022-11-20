
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
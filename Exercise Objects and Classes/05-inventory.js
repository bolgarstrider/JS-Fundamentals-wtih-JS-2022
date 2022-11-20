

function inventory(list) {
    let heroes = [];

    for (const line of list) {
        let [name, level, items] = line.split(' / ');


        heroes.push({
            name,
            level: Number(level),
            items
        });
    }
    let filtered = heroes.sort((a, b) => a.level - b.level);

    for (const hero of filtered) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
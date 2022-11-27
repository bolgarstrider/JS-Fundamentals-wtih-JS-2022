

function heroesOfCodeandLogicVII(input) {

    let heroesArray = [];
    let heroes = {};
    let numberOfHeroes = input.shift();

    //gathering heores

    for (let i = 1; i <= numberOfHeroes; i++) {
        let [name, hp, mana] = input.shift().split(' ');
        heroes = {
            name: name,
            hp: Number(hp),
            mana: Number(mana)
        }
        heroesArray.push(heroes);
    }

    //action

    const maxHP = 100;
    const maxMana = 200;

    let currentLine = input.shift();

    while (currentLine !== 'End') {
        let commands = currentLine.split(' - ');
        let action = commands.shift();

        //get hero name and it's index in the array
        let name = commands[0];
        let myHero = heroesArray.find(x => x.name === name);
        let index = heroesArray.indexOf(myHero);


        if (action === 'CastSpell') {
            //{hero name} – {MP needed} – {spell name}"

            let mpNeeded = Number(commands[1]);
            let spellName = commands[2];

            if (mpNeeded <= heroesArray[index].mana) {
                heroesArray[index].mana -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroesArray[index].mana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        } else if (action === 'TakeDamage') {
            //{hero name} – {damage} – {attacker}"            
            let damage = Number(commands[1]);
            let attacker = commands[2];

            heroesArray[index].hp -= damage;

            if (heroesArray[index].hp <= 0) {
                heroesArray.splice(index, 1);
                console.log(`${name} has been killed by ${attacker}!`);
            } else {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesArray[index].hp} HP left!`);
            }

        } else if (action === 'Recharge') {
            //{hero name} – {amount}
            let manaRestore = Number(commands[1]);

            if (heroesArray[index].mana + manaRestore > maxMana) {
                manaRestore = maxMana - heroesArray[index].mana;
            }

            heroesArray[index].mana += manaRestore;

            console.log(`${name} recharged for ${manaRestore} MP!`);

        } else if (action === 'Heal') {
            //{hero name} – {amount}
            let heal = Number(commands[1]);

            if (heroesArray[index].hp + heal > maxHP) {
                heal = maxHP - heroesArray[index].hp;
            }

            heroesArray[index].hp += heal;

            console.log(`${name} healed for ${heal} HP!`);

        }

        currentLine = input.shift();
    }

    for (const hero of heroesArray) {

        console.log(`${hero['name']}`);
        console.log(`  HP: ${hero['hp']}`);
        console.log(`  MP: ${hero['mana']}`)
    }

}

heroesOfCodeandLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);
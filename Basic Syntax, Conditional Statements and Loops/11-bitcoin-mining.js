function bitcoinMining(input) {

    let money = 0;
    let day = 0;
    let bitcoins = 0;

    for (let i = 0; i < input.length; i++) {

        if ((i + 1) % 3 == 0) {
            money += input[i] * 0.70 * 67.51;
        } else {
            money += input[i] * 67.51;
        }

        if (money >= 11949.16 && bitcoins == 0) {
            day = i + 1
            bitcoins += Math.floor(money / 11949.16);
            money -= Math.floor(money / 11949.16) * 11949.16;
        } else if (money >= 11949.16) {
            bitcoins += Math.floor(money / 11949.16);
            money -= Math.floor(money / 11949.16) * 11949.16;;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (day != 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);

function cardGame(input) {

    const cardsPowers = {

        p: {
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        },

        t: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }


    }

    const players = {};
    for (const line of input) {
        const [name, cards] = line.split(': ')

        if (!players[name]) {
            players[name] = new Set(cards.split(", "));
        } else {
            cards.split(", ").forEach((card) => {
                players[name].add(card);
            })
        }

    }

    for (const key in players) {
        console.log(`${key}: ${totalPower(players[key])}`);
    }

    function totalPower(cardSet) {
        let totalSum = 0;

        cardSet.forEach((card) => {
            let tokens = card.split("");
            let color = tokens.pop();
            let value = tokens.join('');            

            let p = cardsPowers.p[value];

            totalSum += p * (cardsPowers.t[color]);

        })
        return totalSum;
    }



}




cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    );
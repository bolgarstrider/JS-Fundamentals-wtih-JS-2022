// You are given a sequence of people and for every person what cards he draws from the deck. 
// The input will be an array of strings. Each string will be in the format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. 
// The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
// A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. 
// The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. 
// Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}

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
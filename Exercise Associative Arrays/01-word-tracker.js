
function wordTracker(input) {
    const words = {};
    let lookForWords = input.shift().split(' ');


    lookForWords.forEach(word => words[word] = 0);


    input.forEach(element => {

        if (words.hasOwnProperty(element)) {
            words[element]++;
        }

    });

    const sorted = Array.from(Object.entries(words)).sort((a, b) => b[1] - a[1]);

    sorted.forEach(kvp => console.log(`${kvp[0]} - ${kvp[1]}`))

}

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);
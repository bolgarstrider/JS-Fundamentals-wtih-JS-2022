// Write a function that receives an array of words and finds occurrences of given words in that sentence. 
// The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space.
// All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending.


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
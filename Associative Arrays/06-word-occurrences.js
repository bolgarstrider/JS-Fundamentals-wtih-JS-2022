// Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. 
// The input comes as an array of strings

function wordOccurrences(array) {
    let words = new Map();

    while (array.length > 0) {
        let word = array.shift();
        let count = 1;

        if (words.has(word)) {
            count += words.get(word);
        }

        words.set(word, count)
    }

    let sortedWords = Array.from(words.entries()).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    sortedWords.forEach(el => console.log(`${el[0]} -> ${el[1]} times`))
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
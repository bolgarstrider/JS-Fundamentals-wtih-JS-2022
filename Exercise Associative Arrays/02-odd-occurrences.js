// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.

function oddOccurrences(input) {
    const words = input.split(' ').map(el => el.toLowerCase());
    const result = new Map();

    words.forEach(word => {
        if (result.get(word)) {
            result.set(word, (result.get(word) + 1));
        } else {
            result.set(word, 1);
        }

    });

    const outputArr = Array.from(result);
    let output = '';

    for (const kvp of outputArr) {
        if (kvp[1] % 2 !== 0) {
            output += `${kvp[0]} `
        }
    }

    console.log(output)

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
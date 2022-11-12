// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, 
// then it is invalid and should not be printed. 
// Finally, print out all the special words you found without the label (#) on a new line.


function modernTimesOfHashTag(text) {
    let words = text.split(' ');

    for (const word of words) {
        if (word.length > 1 && word.startsWith('#')) {
            let onlyLetters = true;
            for (let i = 1; i < word.length; i++) {
                if (!((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122))) {
                    onlyLetters = false;
                }
            }
            if (onlyLetters) {
                console.log(word.split('#')[1]);
            }

        }
    }
}

modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
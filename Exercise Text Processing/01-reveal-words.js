// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.


function revealWords(firstString, secondString) {
    const words = firstString.split(', ');
    let hidden = secondString.split(' ');
    

    for (const el of hidden) {
        for (const word of words) {
            if (el.length === word.length && el.startsWith('*')) {
                secondString = secondString.replace(el, word);
            }
        }
    }

    console.log(secondString)

}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);


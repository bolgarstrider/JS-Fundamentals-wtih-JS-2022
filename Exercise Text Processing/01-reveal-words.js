
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


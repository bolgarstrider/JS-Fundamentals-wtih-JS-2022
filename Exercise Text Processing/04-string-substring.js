
function stringSubstring(word, text) {
    let tokens = text.toLowerCase().split(' ');
    
    for (const token of tokens) {
        if (token === word) {
            return console.log(word);
        }
    }
    console.log(`${word} not found!`)
}

stringSubstring('javascript',
'JavaScript is the best programming language'
);

function countStringOccurrences(text, word) {
    let wordsArray = text.split(' ');
    let occurrences = [];
    wordsArray.forEach(element => {
        if(element === word){
            occurrences.push(element);
        }        
    });

    console.log(occurrences.length)
}

countStringOccurrences('This is a word and it also is a sentence',
'is'
);
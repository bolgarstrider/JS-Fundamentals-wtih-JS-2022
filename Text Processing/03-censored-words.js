function censoredWords(text, word) {
    let replaced = text.replace(word, '*'.repeat(word.length));
    while(replaced.includes(word)) {
        replaced = replaced.replace(word, '*'.repeat(word.length));
    }

    console.log(replaced)
}
censoredWords('Find the hidden word hidden', 'hidden');
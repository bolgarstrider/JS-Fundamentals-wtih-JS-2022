

function charactersInRange(startChar, endChar) {
    let firstChar = Math.min(startChar.charCodeAt(),endChar.charCodeAt());
    let lastChar = Math.max(startChar.charCodeAt(),endChar.charCodeAt());
    let charsArray = [];
    for (let i = firstChar + 1; i < lastChar; i++) {
        let currentChar = String.fromCharCode(i);        
        charsArray.push(currentChar);
    }

    let result = charsArray.join(' ');
    return result;
}

console.log(charactersInRange('#', ':'));
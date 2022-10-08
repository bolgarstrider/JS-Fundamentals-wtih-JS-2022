// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
// Keep in mind that the second character code might be before the first one inside the ASCII table.

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
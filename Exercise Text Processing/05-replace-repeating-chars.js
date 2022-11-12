// Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.
function replaceRepeatingChars(string) {
    let firstIndex = string[0];
    let result = string[0];

    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i-1]) {
            result += string[i];
        }
        
    }

    console.log(result)
}

replaceRepeatingChars('qqqwerqwecccwd');

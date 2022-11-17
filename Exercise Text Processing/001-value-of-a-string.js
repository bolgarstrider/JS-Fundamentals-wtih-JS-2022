// Write a function, which finds the sum of the ASCII codes of the letters in a given string.  
// Your tasks will be a bit harder because you will have to find the sum of either the lowercase or the uppercase letters.
// On the first line, you will receive the string.
// On the second line, you will receive one of two possible inputs:
// •	If you receive "UPPERCASE"  find the sum of all uppercase English letters in the previously received string
// •	If you receive "LOWERCASE"  find the sum of all lowercase English letters in the previously received string
// You should not sum the ASCII codes of any characters, which are not letters.
// At the end print the sum in the following format:
// •	The total sum is: {sum}


function valueOfAString(input) {
    const string = input.shift();
    const rule = input.shift();
    let value = 0;

    if (rule === 'LOWERCASE') {
        for (const ch of string) {
            let charCode = ch.charCodeAt();
            if (charCode > 96 && charCode < 123) {
                value += charCode;
            }
        }
    } else {
        for (const ch of string) {
            let charCode = ch.charCodeAt();
            if (charCode > 64 && charCode < 91) {
                value += charCode;
            }
        }
    }

    console.log(`The total sum is: ${value}`)


}

valueOfAString(['AC/DC',
'UPPERCASE']

)
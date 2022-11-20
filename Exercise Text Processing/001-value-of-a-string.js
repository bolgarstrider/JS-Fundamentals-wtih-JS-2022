

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
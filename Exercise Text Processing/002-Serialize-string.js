
function serializeString(input) {
    let string = input.shift();
    let letters = [];
 
    for (const ch of string) {
        if (!letters.includes(ch)) {
            letters.push(ch);
        }
    }
 
    while (letters.length > 0) {
        let char = letters.shift();
        let indexes = [];
 
        for (let i = 0; i < string.length; i++) {
            if (char === string[i]) {
                indexes.push(i);
            }
        }
 
        console.log(char + ':' + indexes.join('/'));
    }

}

serializeString(["abababa"]);


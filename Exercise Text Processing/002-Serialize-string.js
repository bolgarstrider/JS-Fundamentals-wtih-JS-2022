// You have been tasked to serialize a string. The serialization is done specially, 
// in which a character from that string is saved with the indexes at which it is found.
// The input will consist array, containing a single string, which may consist of ANY ASCII characters.
// Your task is to serialize the string in the following way:
// {char}:{index1}/{index2}/{index3}
// The char will be the character, and the indexes will be the indexes it is found at in the string.


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




function emojiDetector(input) {

    const emojiPattern = /[*]{2}[A-Z][a-z]{2,}[*]{2}|[:]{2}[A-Z][a-z]{2,}[:]{2}/g;
    const coolPattern = /\d/g;

    const text = input.shift();

    let emojiList = {};
    let coolTreshold = 1; //start from 1 because must use multiply;

    let emojies = text.matchAll(emojiPattern); // find all emojies
    let coolness = text.matchAll(coolPattern); // find all digits

    //multiply all digits to find Treshold
    for (const element of coolness) {
        coolTreshold *= Number(element[0]);
    }

    console.log(`Cool threshold: ${coolTreshold}`);

    // process sum of the ASCII code of every letter
    for (const element of emojies) {
        const emoji = element[0].slice(2, -2); // eleminates ** and :: in the begining and the end
        let asciiSum = 0;

        for (const ch of emoji) {
            let ascii = Number(ch.charCodeAt());
            asciiSum += ascii;
        }

        // add emoji to the emojiList
        emojiList[element[0]] = asciiSum; // use the element with ** :: including


    }

    // count how many emojies are included in the list
    let emojiCount = 0;

    for (const key of Object.keys(emojiList)) {
        emojiCount++;
    }

    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);

    // print emojies with ASCII >= Treshold
    for (const key of Object.keys(emojiList)) {

        if (emojiList[key] >= coolTreshold) {
            console.log(key);
        }        
    }

}

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);

function mirrorWords(string) {
    const text = string.shift();
    const pattern = /([@#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/gm;
    let array1 = [];
    let array2 = [];
    let mirrorWords = [];

    let matches = text.matchAll(pattern);

    for (const match of matches) {
        array1.push(match.groups.firstWord);
        array2.push(match.groups.secondWord);
    }

    if (array1.length < 1) {
        console.log('No word pairs found!');
    } else {
        console.log(`${array1.length} word pairs found!`);
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i].split('').reverse().join('')) {

            mirrorWords.push(`${array1[i]} <=> ${array2[i]}`);
        }
    }

    if (mirrorWords.length > 0) {
        console.log('The mirror words are:')
        console.log(mirrorWords.join(', '));
    } else {
        console.log('No mirror words!');
    }

}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
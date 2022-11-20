
function passwordGenerator(input) {

    let passwordBase = input[0].concat(input[1]);
    let key = input[2].toUpperCase();
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let keyIndex = 0

    for (const char of passwordBase) {
        if (vowels.includes(char)) {
            passwordBase = passwordBase.replace(char, key[keyIndex]);
            keyIndex++;
        }

        if (keyIndex > key.length - 1) {
            keyIndex = 0;
        }
    }
    let newPassword = passwordBase
        .split('')
        .reverse()
        .join('');

    console.log(`Your generated password is ${newPassword}`)
}

passwordGenerator([
        'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]

);
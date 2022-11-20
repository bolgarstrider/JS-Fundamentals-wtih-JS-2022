
function reverseInPlace(strings) {
    let output = strings;

    for (let i = 0; i < output.length / 2; i++ ) {
        let temp = output[i];
        output[i] = output[output.length - 1 - i];
        output[output.length - 1 - i] = temp;
    }

    console.log(`${output.join(' ')}`);


}

reverseInPlace(['33', '123', '0', 'dd']);
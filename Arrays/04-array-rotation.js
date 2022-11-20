
function arrayRotation(array, rotation) {

    for (let i = 0; i < rotation; i++) {
        array.push(array[0]);
        array.shift();
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
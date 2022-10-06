
// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.

function arrayRotation(array, rotation) {

    for (let i = 0; i < rotation; i++) {
        array.push(array[0]);
        array.shift();
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
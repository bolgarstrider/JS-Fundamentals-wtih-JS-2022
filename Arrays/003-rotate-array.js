// Write a function that rotates an array. The array should be rotated to the right side, 
// meaning that the last element should become the first, upon rotation. 
// The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.


function rotateArray(array) {
    let rotation = array[array.length - 1];
    let arrayLength = array.length;
    let newArray = [];

    for (let i = 0; i < arrayLength; i ++) {
        newArray.push(array[i]);
    }
   
    newArray.splice(-1);    
    
    for (let i = 0; i < rotation; i++) {
        let popped = newArray.pop(newArray[newArray.length - 1]);
        newArray.unshift(popped);
    }

    console.log(newArray.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
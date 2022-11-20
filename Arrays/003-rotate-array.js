
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
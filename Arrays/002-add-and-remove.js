// Write a function that adds and removes numbers to/from an array. You will receive a command, which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// •	Upon receiving an "add" command, you should add the current number to your array.
// •	 Upon receiving the "remove" command, you should remove the last entered number, currently existent in the array.


function addAndRemove(array) {
    let arrayLength = array.length;
    let newArray = [];
    for (let i = 0; i < arrayLength; i++) {
        if (array[i] == 'add') {
            newArray.push(i + 1);
        } else {
            newArray.splice(-1);
        }
    }

    if (newArray.length > 0) {
        console.log(newArray.join(' '));
    } else {
        console.log('Empty');
    }
   
}

addAndRemove(['remove', 'remove', 'remove']);
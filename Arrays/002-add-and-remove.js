
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

function printNthElement(array) {
    let step = Number(array[array.length - 1]);
    let newArray = [];
    let arrayLength = array.length - 1;

    for (let i = 0; i < arrayLength; i += step) {
        newArray.push(array[i]);
    }

    console.log(newArray.join(' '));
}

printNthElement(['dsa', 'asd', 'test', 'test', '2']);
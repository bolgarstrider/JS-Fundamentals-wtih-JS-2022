// Write a function to find all the top integers in an array.
// A top integer is an integer, which is bigger than all the elements to its right. 

function maxNumber(array) {

    let arrayLength = array.length;
    let result = []

    for (let i = 0; i < arrayLength; i++) {
        let isBigger = true;
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[i] <= array[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            result.push(array[i]);
        }
    }

    console.log(result.join(' '));
}

maxNumber([41, 41, 34, 20]);
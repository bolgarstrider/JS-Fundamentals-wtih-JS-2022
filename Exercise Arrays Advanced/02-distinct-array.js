// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array. 
// Print the result elements separated by a single space.


function distinctArray(array) {

    let uniqueArray = [];

    for (const el of array) {
        if (!uniqueArray.includes(el)) {
            uniqueArray.push(el);
        }
    }

    console.log(uniqueArray.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);


// Write a function that sorts an array of numbers so that the first element is the biggest one, 
// the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on. 
// Print the elements on one row, separated by a single space.


function sorting(array) {

    let sortedArray = [];
    array = array.sort((a, b) => a - b);

    while (array.length > 0) {
        sortedArray.push(array.pop());
        sortedArray.push(array.shift());
    }

    console.log(sortedArray.join(' '));


}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
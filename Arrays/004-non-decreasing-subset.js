// Write a function that extracts only those numbers that form a non-decreasing subset.
//  In other words, you start from the first element and continue to the end of the given array of numbers.
//   Any number which is LESS THAN the current biggest one is ignored, 
//   alternatively if it’s equal or higher than the current biggest one you set it as 
//   the current biggest one and you continue to the next number. 

function nonDecreasingSubset(array) {

    let biggest = 0;
    let newArray = [];

    for (let num of array) {
        if (num >= biggest) {
            newArray.push(num);
            biggest = num;
        }
    }

    console.log(newArray.join(' '));

}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);

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
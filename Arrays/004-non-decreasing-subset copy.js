
function nonDecreasingSubset(array) {

    let biggest = array[0];
    let newArray = array.filter(num => {
        if (num >= biggest) {
            biggest = num;
        };
        return num >= biggest;
    });

    // for (let num of array) {
    //     if (num >= biggest) {
    //         newArray.push(num);
    //         biggest = num;
    //     }
    // }

    console.log(newArray.join(' '));

}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
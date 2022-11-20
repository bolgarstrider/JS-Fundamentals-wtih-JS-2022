
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
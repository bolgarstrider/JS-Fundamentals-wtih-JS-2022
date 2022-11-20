
function condenseArray(arr1) {

    function condense(array) {
        let newArray = []
        for (let i = 0; i < array.length - 1; i++) {
            newArray[i] = array[i] + array[i + 1];
        }
        if (newArray.length > 1) {
            condense(newArray);
        } else {
            console.log(`${newArray}`);
        }
    }

    if (arr1.length > 1) {
        condense(arr1);
    } else {
        console.log(`${arr1}`)
    }

}

condenseArray([2, 10, 3]);
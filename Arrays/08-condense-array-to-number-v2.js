// Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements
//  until a single number is obtained. 
// Examples
// For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain
//  {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.

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
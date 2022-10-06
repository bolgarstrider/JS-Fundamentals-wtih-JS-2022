// Write a function, which receives two string arrays and merges them into a third array.  
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index


function mergeArrays(array1, array2) {

    let array3 = [];
    let array1Length = array1.length;

    for (let i = 0; i < array1.length; i++) {
        if (i % 2 == 0) {
            array3.push(Number(array1[i]) + Number(array2[i]));
        } else {
            array3.push(array1[i] + array2[i]);
        }
    }

    console.log(array3.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

// 22 - 1522 - 110 - 5636 - 46
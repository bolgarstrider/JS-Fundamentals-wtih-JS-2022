// Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements
//  until a single number is obtained. 
// Examples
// For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain
//  {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.

function condenseArray(arr1) {
    let condensed = [];

    if (arr1.length > 1) {
        while (arr1.length > 1) {
            for (let i = 0; i <= arr1.length - 2; i++) {
                condensed[i] = arr1[i] + arr1[i + 1];
            }
            if (condensed.length > 1) {
                arr1 = condensed;
                condensed = [];
            } else {
                console.log(`${condensed}`);
                break;
            }
        }
    } else {
        console.log(`${arr1}`)
    }
}

condenseArray([1]);
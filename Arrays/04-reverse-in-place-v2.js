// Write a program, which receives an array of strings. 
// Your task is to reverse the array without creating a new array. 
// Print the resulting elements on a single line, space-separated. 

function reverseInPlace(strings) {
    let output = strings;

    function swapArray(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }



    for (let i = 0; i < output.length / 2; i++) {
        swapArray(output, i, output.length - 1 - i);
    }

    console.log(`${output.join(' ')}`);


}

reverseInPlace(['33', '123', '0', 'dd']);

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
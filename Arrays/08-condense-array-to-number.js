
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
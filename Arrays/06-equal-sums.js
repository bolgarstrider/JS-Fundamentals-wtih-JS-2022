
function equalSums(array) {
    let result = 'no';
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }

        for (let r = i + 1; r < arrayLength; r++) {
            rightSum += array[r];
        }

        if (leftSum == rightSum) {
            result = i;
        }
    }

    console.log(result);
}

equalSums([10,
    5,
    5,
    99,
    3,
    4,
    2,
    5,
    1,
    1,
    4]);
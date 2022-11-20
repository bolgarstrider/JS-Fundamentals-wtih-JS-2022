
function addAndSubstract(array) {
    let modifiedArray = [];
    let arrayLength = array.length
    let arraySum = 0;
    let modifiedArraySum = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (array[i] % 2 == 0) {
            modifiedArray[i] = array[i] + i;

        } else {
            modifiedArray[i] = array[i] - i;
        }
        arraySum += array[i];
        modifiedArraySum += modifiedArray[i];
    }

    console.log(modifiedArray);
    console.log(arraySum);
    console.log(modifiedArraySum);
}

addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);
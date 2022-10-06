// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, 
// on the third line print the sum of numbers from the modified array.


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
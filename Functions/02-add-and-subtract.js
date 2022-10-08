// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), 
// which subtracts the result of the function the sum() and the third integer.


function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sum = (a, b) => a + b;
    let result = sum(firstNum, secondNum) - thirdNum;

    return result;
}

console.log(addAndSubtract(23, 6, 10));
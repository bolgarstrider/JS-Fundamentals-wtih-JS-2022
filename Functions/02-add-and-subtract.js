
function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sum = (a, b) => a + b;
    let result = sum(firstNum, secondNum) - thirdNum;

    return result;
}

console.log(addAndSubtract(23, 6, 10));
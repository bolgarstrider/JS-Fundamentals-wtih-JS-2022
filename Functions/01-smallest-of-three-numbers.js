// Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function

function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let result = Math.min(firstNum, secondNum, thirdNum);
    return result;
}

console.log(smallestOfThreeNumbers(600, 342, 123));
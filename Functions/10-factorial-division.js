// Write a function that receives two integer numbers. Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.



function factorialDivision(firstNum, secondNum) {
    // let firstNumF = firstNum;
    // let secondNumF = secondNum;

    // for (let i = 1; i < firstNum; i++) {
    //     firstNumF *= (firstNum - i);
    // }

    // for (let j = 1; j < secondNum; j++) {
    //     secondNumF *= (secondNum - j);
    // }

    // result = (firstNumF / secondNumF).toFixed(2);
    // return result;

    function factorial(x) {

        // if number is 0
        if (x === 0) {
            return 1;
        }
    
        // if number is positive
        else {
            return x * factorial(x - 1);
        }
    }

    let firstNumF = factorial(firstNum);
    let secondNumF = factorial(secondNum);

    result = (firstNumF / secondNumF).toFixed(2);
    return result;

}

console.log(factorialDivision(5, 2));
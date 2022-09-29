// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function evenOddSubstruction(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of numbers) {
        let currentNum = Number(num);

        if (currentNum % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }

    } 


    console.log(evenSum - oddSum);
}

evenOddSubstruction([3,5,7,9]);
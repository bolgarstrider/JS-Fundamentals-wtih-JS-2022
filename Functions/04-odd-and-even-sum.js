// You will receive a single number. You have to write a function, 
// that returns the sum of all even and all odd digits from that number. 

function oddAndEvenSum(num) {
    let stringNum = num.toString();
    let stringNumLength = stringNum.length;
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < stringNumLength; i++) {
        let current = Number(stringNum[i]);
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}

console.log(oddAndEvenSum(3495892137259234));
// Write a function that receives a number and checks if that number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
//  That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Output
// •	If the number is perfect, print: "We have a perfect number!"
// •	Otherwise, print: "It's not so perfect."


function perfectNumber(num) {

    let divider = [];
    let dividersSum = 0;

    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            divider.push(i);
            dividersSum += i;

        }
    }

    // let dividersSum = divider.reduce((a, b) => a + b, 0);

    if (dividersSum == num) {
        console.log(`We have a perfect number!`);

    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(28);
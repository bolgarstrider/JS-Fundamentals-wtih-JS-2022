// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.


function sumFirstAndLast(numbers) {
    let firstEl = Number(numbers.shift());
    let lastEl = Number(numbers.pop());
    let result = firstEl + lastEl;

    console.log(result);

}

sumFirstAndLast(['5', '10']);
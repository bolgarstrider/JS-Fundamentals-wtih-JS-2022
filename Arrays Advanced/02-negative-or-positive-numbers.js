// Write a function that processes the elements in an array one by one and produces a new array. 
// Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element 
// at the end of the array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console, each element on a new line.


function NegativeOrPositive(numbers) {
    let nums = numbers.map(Number);
    let result = [];
    
    for (const num of nums) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return result.forEach(x => console.log(x));

}
console.log(NegativeOrPositive(['3', '-2', '0', '-1']));

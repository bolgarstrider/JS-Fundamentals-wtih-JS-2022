// You are given an array of numbers. Write a function that prints the elements at odd positions from the array, 
// doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.


function processOddNumbers(arr) {
    let newArr = arr
        .filter((num, index) => index % 2 !== 0)
        .map(num => num * 2)
        .reverse();
    console.log(newArr.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);
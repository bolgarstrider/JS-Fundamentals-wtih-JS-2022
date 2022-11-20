

function processOddNumbers(arr) {
    let newArr = arr
        .filter((num, index) => index % 2 !== 0)
        .map(num => num * 2)
        .reverse();
    console.log(newArr.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);
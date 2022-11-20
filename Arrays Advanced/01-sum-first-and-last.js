
function sumFirstAndLast(numbers) {
    let firstEl = Number(numbers.shift());
    let lastEl = Number(numbers.pop());
    let result = firstEl + lastEl;

    console.log(result);

}

sumFirstAndLast(['5', '10']);

function smallestTwoNumbers(numbers) {

    let smallest = numbers.sort((a, b) => a - b).slice(0, 2);
    console.log(smallest.join(' '));
    
}

smallestTwoNumbers([30, 15, 50, 5]);

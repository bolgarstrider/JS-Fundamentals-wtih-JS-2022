// You will receive two arrays of integers. The second array is containing exactly three numbers. 
// The first number represents the number of elements you have to take from the first array (starting from the first one).
// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// The third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."


function searchForANumber(numbers, actions) {
    let elToTake = actions[0];
    let elToDelete = actions[1];
    let serachFor = actions[2];
    let counter = 0;

    let newArray = numbers.slice(0, elToTake);
    newArray.splice(0, elToDelete);

    for (const el of newArray) {
        if (el == serachFor) {
            counter++;
        }
    }

    console.log(`Number ${serachFor} occurs ${counter} times.`)
}

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]

);
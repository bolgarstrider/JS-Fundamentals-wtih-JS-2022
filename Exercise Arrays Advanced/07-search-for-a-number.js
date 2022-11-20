
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
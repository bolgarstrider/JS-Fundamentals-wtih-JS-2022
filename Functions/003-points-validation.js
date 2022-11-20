
function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    //check distance between Y and 0
    let distanceX0 = Math.sqrt(x1**2 + y1**2);
    if (Number.isInteger(distanceX0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    //check distance between Y and 0
    let distanceY0 = Math.sqrt(x2**2 + y2**2);
    if (Number.isInteger(distanceY0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    //check distance between X and Y
    let distanceXY = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    if (Number.isInteger(distanceXY)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([2, 1, 1, 1]);
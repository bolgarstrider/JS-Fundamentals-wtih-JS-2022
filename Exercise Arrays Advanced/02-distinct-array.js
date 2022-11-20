
function distinctArray(array) {

    let uniqueArray = [];

    for (const el of array) {
        if (!uniqueArray.includes(el)) {
            uniqueArray.push(el);
        }
    }

    console.log(uniqueArray.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);


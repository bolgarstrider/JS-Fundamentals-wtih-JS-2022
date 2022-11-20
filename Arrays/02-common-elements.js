
function commonElements(array1, array2) {

    for (let element of array1) {
        let array2Length = array2.length;
        for (let i = 0; i < array2Length; i++) {
            if (element === array2[i]) {
                console.log(element);
            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
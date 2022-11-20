

function carWash(arr) {
    let clean = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let command = arr[i];
        switch (command) {
            case 'soap':
                clean += 10;
                break;
            case 'water':
                clean = clean * 1.2;
                break;
            case 'vacuum cleaner':
                clean = clean * 1.25;
                break;
            case 'mud':
                clean = clean * 0.9;
                break;
        }
    }
    let result = `The car is ${clean.toFixed(2)}% clean.`
    return result;
}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
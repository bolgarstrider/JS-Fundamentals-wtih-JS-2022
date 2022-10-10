// Write a JS function that receives some commands. Depending on the command, 
// add or subtract a percentage of how much the car is cleaned or dirty. 
// Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//              `The car is {value}% clean.`
//   Note: The value should be rounded to the second decimal point.


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
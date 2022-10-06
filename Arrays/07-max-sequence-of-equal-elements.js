// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.


function MaxSequenceOfEqualElements(array) {

    let arrayLength = array.length - 1;
    let counter = 1;
    let longestCount = 0;
    let winner;

    for (let i = 0; i < arrayLength; i++) {

        if (array[i] == array[i + 1]) {

            counter++;
        } else {
            counter = 1;
        }

        if (counter > longestCount) {
            longestCount = counter;
            winner = (array[i]);
        }
    }

    let output = "";
    for (let j = 0; j < longestCount; j++) {
        output += `${winner} `;
    }

    console.log(output);

}

MaxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 

function magicSum(array, magic) {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[i] + array[j] == magic) {
                console.log(`${array[i]} ${array[j]}`)
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
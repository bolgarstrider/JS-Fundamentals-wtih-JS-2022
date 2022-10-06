// You are given a field size and the indexes of ladybugs inside the field. 
// A ladybug changes its position either to its left or to its right by a given fly length. 
// A command to a ladybug looks like this: "0 right 1". This means that the little insect placed on index 0 should fly one index to its right. 
// If the ladybug lands on a fellow ladybug, it continues to fly in the same direction by the same fly length. If the ladybug flies out
//  of the field, it is gone.
// For example, imagine you are given a field with size 3 and ladybugs on indexes 0 and 1. 
// If the ladybug on index 0 needs to fly to its right by the length of 1 (0 right 1) it will attempt to land on 
// index 1 but as there is another ladybug there it will continue further to the right by an additional length of 1, 
// landing on index 2. After that, if the same ladybug needs to fly to its right by the length of 1 (2 right 1), 
// it will land somewhere outside of the field, so it flies away:


// If you are given a ladybug index that does not have a ladybug there, nothing happens. 
// If you are given a ladybug index that is outside the field, nothing happens. 
// Your job is to create the program, simulating the ladybugs flying around doing nothing. 
// In the end, print all cells in the field separated by blank spaces. For each cell that has a ladybug on it print '1' 
// and for each empty cell print '0'. For the example above, the output should be '0 1 0'. 
// Input
// •	You will receive an array of strings and the first element is an integer – the size of the field
// •	The second element is a string containing the initial indexes of all ladybugs separated by a blank space. 
// The given indexes may or may not be inside the field range
// •	The next elements in the array are commands in the format:

// Output
// •	Print the all cells within the field in format: `{cell} {cell} … {cell}`
// o	If a cell has a ladybug in it, print '1'
// o	If a cell is empty, print '0' 
// Constrains
// •	The size of the field will be in the range [0 … 1000]
// •	The ladybug indexes will be in the range [-2,147,483,647 … 2,147,483,647]
// •	The number of commands will be in the range [0 … 100] 
// •	The fly length will be in the range [-2,147,483,647 … 2,147,483,647]


function ladybugs(array) {
    //field size
    let fieldSize = array[0];
    //console.log(`fieldSize ${fieldSize}`); //

    // ladybugs postions
    let ladybugsPosition = array[1].split(' ').map(Number);
    //console.log(`ladybugsPosition ${ladybugsPosition}`); //
    // field array filled with 0
    let bugsField = [];
    for (let i = 0; i < fieldSize; i++) {
        bugsField.push(0);
    }
    //console.log(`bugsField ${bugsField}`);//
    // placing bugs
    for (let i = 0; i < fieldSize; i++) {
        let bugIndex = ladybugsPosition[i];
        if (bugIndex >= 0 && bugIndex < fieldSize) {
            bugsField[bugIndex] = 1;
        }
    }
    //console.log(`bugsField ${bugsField}`);//

    //getting commands
    for (let i = 2; i < array.length; i++) {
        let destruct = array[i].split(' ');
        let bugIndex = Number(destruct[0]);
        let command = destruct[1];
        let jump = Number(destruct[2]);

        if ((bugsField[bugIndex] !== 1) || bugIndex < 0 || bugIndex > fieldSize) {
            continue;
        } 


        //free target position
        bugsField[bugIndex] = 0;

        if (command == 'right') {
            let newPosition = bugIndex + jump;

            if (bugsField[newPosition] == 1) {
                newPosition = newPosition + jump;
            }

            if (newPosition < fieldSize) {
                bugsField[newPosition] = 1
            }

        } else {
            let newPosition = bugIndex - jump;

            if (bugsField[newPosition] == 1) {
                newPosition = newPosition - jump;
            }

            if (newPosition >= 0) {
                bugsField[newPosition] = 1
            }
        }
    }

    console.log(bugsField.join(' '));
}

ladybugs([ 5, '3',
'3 left 2',
'1 left -2']




);
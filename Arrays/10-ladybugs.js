

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
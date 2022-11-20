

function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let command = input.shift().split(' ');
    let moves = 0;


    while (command[0] !== 'end' && sequence.length>1) {
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);
        moves++;

        if (!sequence[index1] || !sequence[index2] || index1 == index2) {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequence.splice(sequence.length/2, 0, `-${moves}a`, `-${moves}a`);
        } else if (sequence[index1] === sequence[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`)
            sequence = sequence.filter((a, i) => i !== index1 && i !== index2);
            
        } else {
            console.log('Try again!');
        }

        if (sequence.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
        command = input.shift().split(' ')
    }

    if (command[0] == 'end' && sequence.length > 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    }
 
}

memoryGame( [
"a 2 4 a 2 4", 
"4 0", 
"0 2",
"0 1",
"0 1", 
"end"
]
);
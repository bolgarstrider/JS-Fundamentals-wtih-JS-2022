// Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. 
// Until the player receives "end" from the console, you will receive strings with two integers separated by a space, 
// representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, 
// you should add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a" 
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// •	On the first line, you will receive a sequence of elements
// •	On the following lines, you will receive integers until the command "end"
// Output
// •	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - ${element}!"
// •	If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// •	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message: 
// "You have won in {number of moves until now} turns!"
// •	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// •	All elements in the sequence will always have a matching element.



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
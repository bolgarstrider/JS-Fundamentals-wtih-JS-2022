// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence,
//  sorted in descending order.
// Input
// •	Read from the console a single line holding space-separated integers.
// Output
// •	Print the above-described numbers on a single line, space-separated. 
// •	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
// •	Print "No" if no numbers hold the above property.
// Constraints
// •	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
// •	The count of numbers is in the range [1…10 000].


function numbers(input) {
    let numbers = input.split(' ').map(Number);    
    let average = (numbers.reduce((a, b) => a + b, 0)) / numbers.length;    
    let filtered = numbers.filter(x => x > average);    
    let sorted = filtered.sort((a, b) => b - a);
    

    if(sorted.length > 0) {
        sorted.length = 5;
        console.log(sorted.join(' '));
    } else {
        console.log('No');
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
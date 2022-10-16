// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right.
//  Detonations are performed from left to right and all detonated numbers disappear. 
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.

// The output is the sum of the remaining elements in the sequence.



function bombNumbers(numbers, bomb) {
    let bomber = bomb[0];
    let power = bomb[1]; 
    

    while (numbers.includes(bomber)) {
        let index = numbers.indexOf(bomber);
        let stepLeft = Math.max((index - power), 0);
        let bombArea = power * 2 + 1;
       
        numbers.splice(stepLeft, bombArea);        
    }    
    
    let sum = numbers.reduce((a, b) => a + b, 0);
    
    console.log(sum);

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
    [2, 1]
    
);
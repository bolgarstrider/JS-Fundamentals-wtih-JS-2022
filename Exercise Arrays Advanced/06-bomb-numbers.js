
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


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
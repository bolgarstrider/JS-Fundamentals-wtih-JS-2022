
function lastKNumbersSequance(n, k) {
    let arr = [1];

    for (let j = 1; j < n; j++) {
        
        let sequence = arr.slice(-index);       
        let sum = sequence.reduce((a, b) => a + b);         
        arr.push(sum);
    }

    console.log(arr.join(' '));
}
lastKNumbersSequance(8, 2);


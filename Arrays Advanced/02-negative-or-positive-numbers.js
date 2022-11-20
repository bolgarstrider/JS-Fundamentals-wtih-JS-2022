
function NegativeOrPositive(numbers) {
    let nums = numbers.map(Number);
    let result = [];
    
    for (const num of nums) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return result.forEach(x => console.log(x));

}
console.log(NegativeOrPositive(['3', '-2', '0', '-1']));

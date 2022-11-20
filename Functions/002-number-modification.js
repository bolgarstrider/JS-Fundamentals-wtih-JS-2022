
function numberModification(num) {
    let arr = num.toString().split('');
    let arrNum = [];
    arr.forEach(str => arrNum.push(Number(str)));
    

    function average(array){
        return array.reduce((a, b) => a + b, 0) / array.length;
    }
    
    while(average(arrNum) <= 5) {
        arrNum.push(9);
        
    }

    console.log(arrNum.join(''))

}

numberModification(5835);
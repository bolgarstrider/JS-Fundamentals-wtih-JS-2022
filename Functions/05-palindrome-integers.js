
function palindromeIntegers(arr) {
    let stringArr = arr.join(' ').split(' ');


    for (let i = 0; i < stringArr.length; i++) {
        let currentNum = stringArr[i].split('').join('');
        let reverseNum = stringArr[i].split('').reverse().join('');

        
        if (currentNum == reverseNum) {
            
            console.log(true);
        } else {
            console.log(false);
        }
        
    }

}


palindromeIntegers([123,323,421,121]);
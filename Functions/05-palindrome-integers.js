// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function,
//  which receives an array of positive integers and checks if each integer is a palindrome or not.
// Output
// •	If the current integer is a palindrome, print: "true"
// •	Otherwise, print: "false"

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
// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves. 
// Print each half on a separate line.

function cutAndReverse(input) {
    const middle = input.length / 2;
    const firstHalf = input.substring(0, middle)
    .split('')
    .reverse()
    .join('');
    const secondHalf = input.substring(middle)
    .split('')
    .reverse()
    .join('');
    console.log(firstHalf)
    console.log(secondHalf)

}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

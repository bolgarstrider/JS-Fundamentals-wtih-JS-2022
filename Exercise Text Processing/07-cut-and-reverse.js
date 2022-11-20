
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

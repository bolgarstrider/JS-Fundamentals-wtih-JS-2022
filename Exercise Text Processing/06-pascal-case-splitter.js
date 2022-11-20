
function pascalCaseSplitter(input) {

    const lowerCase = input.toLowerCase();
    const inputLength = input.length;
    let result = input[0];
    for (let i = 1; i < inputLength; i++) {
        if (input[i] !== lowerCase[i]){
            result += ', ';
        }

        result += input[i];
    }

    console.log(result)

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
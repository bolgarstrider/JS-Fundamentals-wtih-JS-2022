// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.

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
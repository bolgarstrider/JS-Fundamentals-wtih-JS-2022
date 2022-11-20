

function lettersChangeNumbers(input) {
    const tokens = input.split(' ');

    let result = 0;

  

    for (const token of tokens) {
        if (token.length > 1) { //if there are more than one "whitespace"
            const firstCharCode = token[0].charCodeAt();
            const secondCharCode = token[token.length - 1].charCodeAt();
            let num = Number(token.substring(1, token.length - 1));
            // console.log(firstAction)
            //First Action
            if (isUpper(firstCharCode)) {
                //devide
                num = num / (firstCharCode - 64);

            } else if (isLower(firstCharCode)) {
                //multiply
                num = num * (firstCharCode - 96);
            }

            //Second Action
            if (isUpper(secondCharCode)) {
                //subtract
                num = num - (secondCharCode - 64);
            } else if (isLower(secondCharCode)) {
                //add
                num = num + (secondCharCode - 96);
            }

            result += num;
        }
    }

    function isUpper(charCode) {
        if (charCode > 64 && charCode < 91) {
            return true;
        } else {
            return false;
        }
    }

    function isLower(charCode) {
        if (charCode > 96 && charCode < 123) {
            return true;
        } else {
            return false;
        }
    }

    console.log(result.toFixed(2))
}

lettersChangeNumbers('P34562Z q2576f   H456z');
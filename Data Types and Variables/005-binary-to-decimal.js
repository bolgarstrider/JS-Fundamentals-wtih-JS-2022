
function binaryToDecimal(binary) {

    let decimal = 0;

  
    let binaryLength = binary.length;
    for (let i = 0; i < binaryLength; i++) {
        decimal += binary[i] * Math.pow(2, (binaryLength - i - 1))
    }
    console.log(decimal)
}

binaryToDecimal('00001001');
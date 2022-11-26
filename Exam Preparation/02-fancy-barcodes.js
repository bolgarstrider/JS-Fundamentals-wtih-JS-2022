
function fancyBarcodes(input) {

    const pattern = /(@#+)([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)/g;
    
    const num = input[0];   

    for (let i = 1; i <= num; i++) {
        let currentBarcode = input[i];
        let match = currentBarcode.match(pattern);

        if (match) {
            let productGroup = '';
            let noDigits = true;
            for (const ch of currentBarcode) {
                if (!isNaN(ch)) {
                    productGroup += ch;
                    noDigits = false;
                }
            }

            if (noDigits) {
                console.log('Product group: 00')
            } else {
                console.log(`Product group: ${productGroup}`)
            }

        } else {
            console.log('Invalid barcode');
        }

    }
}

// fancyBarcodes(["6",
//     "@###Val1d1teM@###",
//     "@#ValidIteM@#",
//     "##InvaliDiteM##",
//     "@InvalidIteM@",
//     "@#Invalid_IteM@#",
//     "@#ValiditeM@#"
// ]);

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"

])
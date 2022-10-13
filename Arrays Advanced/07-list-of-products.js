// You will receive an array of products. Print a numbered array of all the products ordered by name.

function listOfProducts(products) {

//   let sortedProducts =  products.sort((a, b) => a.localeCompare(b));
  let sortedProducts =  products.sort();
    // products.sort((a, b) => {
    //         if (a.toLowerCase() < b.toLowerCase()) {
    //             return -1;
    //         } else if (a.toLowerCase() < b.toLowerCase()) {
    //             return 1;
    //         } else {
    //             return 0;
    //         }
    //     })



    if (sortedProducts.length >= 1) {
        for (let i = 0; i < sortedProducts.length; i++) {
            console.log(`${i+1}.${sortedProducts[i]}`);
        }
    }
    

}
listOfProducts(['Watermelon', 'Banana', 'Apples']);
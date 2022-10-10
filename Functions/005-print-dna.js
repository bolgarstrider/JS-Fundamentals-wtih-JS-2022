// Write a JS program that prints a DNA helix with a length, specified by the user. 
// The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. 
// See the examples for more information.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.

// 10 
// 1 **AT**
// 2 *C--G*
// 3 T----T
// 4 *A--G*

// 5 **GG**
// 6 *A--T*
// 7 C----G
// 8 *T--T*
// 9 **AG**

// 10 *G--G*



function printDNA(num){
    let dnaArray = 'ATCGTTAGGG'.split('');
    // console.log(dnaArray);

    // let [a, b] = dnaArray.splice(0,2)

    // console.log(dnaArray);
    // console.log(a);
    // console.log(b);


    for(let i = 1; i <= num; i++){
        //get first two elements
        let [a, b] = dnaArray.splice(0,2)
        if(i === 1 || i % 4 === 1){
            console.log(`**${a}${b}**`);
        }
        else if(i === 2 || i % 4 === 2){
            console.log(`*${a}--${b}*`);
        }
        else if(i === 3 || i % 4 === 3){
            console.log(`${a}----${b}`);
        }
        else if(i === 4 || i % 4 === 0){
            console.log(`*${a}--${b}*`);
        }
        
        //put elements at the end of the array
        dnaArray.push(a)
        dnaArray.push(b)
    }
}

printDNA(10);

// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*
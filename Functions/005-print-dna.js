

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
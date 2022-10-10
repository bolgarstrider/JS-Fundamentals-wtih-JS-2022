// You need to write a JS program that monitors the current thickness of the crystal and recommends the next
//  procedure that will bring it closer to the desired frequency. To reduce waste and the time it takes to make each
//   crystal your program needs to complete the process with the least number of operations. Each operation takes
//    the same amount of time, but since they are done at different parts of the factory, the crystals have to be
//     transported and thoroughly washed every time an operation different from the previous must be performed,
//      so this must also be taken into account. When determining the order, always attempt to start from the operation that removes the largest amount of material.
// The different operations you can perform are the following:
// •	Cut – cuts the crystal in 4
// •	Lap – removes 20% of the crystal’s thickness
// •	Grind – removes 20 microns of thickness
// •	Etch – removes 2 microns of thickness
// •	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
// •	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); 
// do this after every batch of operations that remove material
// At the beginning of your program, you will receive a number representing the desired final thickness 
// and a series of numbers, representing the thickness of crystal ore in microns. Process each chunk and 
// print to the console the order of operations and the number of times they need to be repeated to bring them to the desired thickness.
// The input comes as a numeric array with a variable number of elements. The first number is the target thickness 
// and all following numbers are the thickness of different chunks of quartz ore.
// The output is the order of operation and how many times they are repeated, every operation on a new line. 
// See the examples for more information.


function radioCrystal(array) {

    let piece = array.shift();
    let counter = 0;

    while (array.length >= 1) {
        let chunk = array.shift();


        console.log(`Processing chunk ${chunk} microns`)
        // Cut
        if (piece <= chunk / 4) {

            while (piece <= chunk / 4) {
                chunk = cut(chunk);

            }
            console.log(`Cut x${counter}`);
            counter = 0;
            chunk = transporting(chunk);
        }


        // Lap 
        if (piece <= chunk * 0.8) {
            while (piece <= chunk * 0.8) {
                chunk = lap(chunk);
            }
            console.log(`Lap x${counter}`);
            counter = 0;
            chunk = transporting(chunk);
        }


        // Grinding
        if (piece <= chunk - 20) {
            while (piece <= chunk - 20) {
                chunk = grinding(chunk);
            }
            console.log(`Grind x${counter}`);
            counter = 0;
            chunk = transporting(chunk);
        }

        //Etch
        if (piece - 1 <= chunk - 2) {
            while (piece - 1 <= chunk - 2) {
                chunk = etch(chunk);
            }
            console.log(`Etch x${counter}`);
            counter = 0;
            chunk = transporting(chunk);

        }

        //X-Ray
        if (piece >= chunk + 1) {

            chunk = xRay(chunk);

            console.log(`X-ray x${counter}`);
            counter = 0;

        }

        if (piece = chunk) {
            console.log(`Finished crystal ${piece} microns`)
        }


    }



    function cut(crystal) {
        crystal = crystal / 4;
        counter++;
        return crystal;
    }

    function lap(crystal) {
        crystal = crystal * 0.8;
        counter++;
        return crystal;
    }

    function grinding(crystal) {
        crystal -= 20;
        counter++;
        return crystal;
    }

    function etch(crystal) {
        crystal -= 2;
        counter++;
        return crystal;
    }

    function xRay(crystal) {
        crystal += 1;
        counter++;
        return crystal;
    }

    function transporting(crystal) {
        console.log('Transporting and washing');
        return Math.floor(crystal);;
    }




}

radioCrystal([1375, 50000])
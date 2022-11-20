

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
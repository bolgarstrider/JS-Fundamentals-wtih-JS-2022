
function guineaPig(input) {
    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let weight = Number(input[3]);

    for (let days = 1; days <= 30; days++) {
                
        food -= 0.3;

        if (days % 2  == 0) {
            hay -= 0.05 * food;
        }

        if (days % 3 == 0){
            cover -= weight / 3;
        }

        if (food < 0 || hay < 0 || cover < 0) {
            console.log('Merry must go to the pet store!')
            break;
        }

        if (days == 30) {
            console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`)
        }
    }

}

guineaPig((["1", 
"1.5", 
"3", 
"1.5"
])

);
// Merry has a guinea pig named Puppy, that she loves very much. Every month she goes to the nearest pet store
//  and buys him everything he needs – food, hay, and cover.
// On the first three lines, you will receive the quantity of food, hay, and cover, which Merry buys for a month (30 days).
//  On the fourth line, you will receive the guinea pig's weight.
// Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, then gives it a certain amount of hay
//  equal to 5% of the rest of the food. On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight.
// Calculate whether the quantity of food, hay, and cover, will be enough for a month.
// If Merry runs out of food, hay, or cover, stop the program!
// Input
// •	On the first line – quantity food in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the second line – quantity hay in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the third line – quantity cover in kilograms - a floating-point number in the range [0.0 – 10000.0]
// •	On the fourth line – guinea's weight in kilograms - a floating-point number in the range [0.0 – 10000.0]
// Output
// •	If the food, the hay, and the cover are enough, print:
// o	"Everything is fine! Puppy is happy! Food: {excessFood}, Hay: {excessHay}, Cover: {excessCover}."
// •	If one of the things is not enough, print:
// o	"Merry must go to the pet store!"
// The output values must be formatted to the second decimal place!


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
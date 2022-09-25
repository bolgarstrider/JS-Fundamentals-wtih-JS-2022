// Write a function that calculates a triangle’s area by its 3 sides.
// The input comes as three number arguments, representing one side of a triangle.
// •	Use Heron’s formula to obtain the result.


function triangleArea(a, b, c) {
    let semiPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));

    console.log(area);
}

triangleArea(2, 3.5, 4)
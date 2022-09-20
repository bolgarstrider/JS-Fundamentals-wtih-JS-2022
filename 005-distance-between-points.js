function DistanceBetweenPoints(x1, y1, x2, y2) {
                                2,  4,  5,  0
    let a = Math.abs(x2 - x1);
    let b = Math.abs(y2 - y1);
 

    let c = Math.sqrt(a*a + b*b);
    console.log(c);
}

DistanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)
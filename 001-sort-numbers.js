function sortNumbers(a, b, c) {
    let min = a;
    let mid = b;
    let max = c;

    if (a <= b && a <= c) {
        min = a;
        if (b <= c) {
            mid = b;
            max = c;
        } else {
            mid = c;
            max = b;
        }
    } else if (b <= a && b <= c) {
        min = b;
        if (a <= c) {
            mid = a;
            max = c;
        } else {
            mid = c;
            max = a;
        }
    } else if (c <= a && c <= b) {
        min = c;
        if (b <= a) {
            mid = b;
            max = a;
        } else {
            mid = a;
            max = b;
        }
    }
    console.log(max)
    console.log(mid)
    console.log(min)

}

sortNumbers(0, 0 , 2)
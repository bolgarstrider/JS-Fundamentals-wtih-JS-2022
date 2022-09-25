function biggestNumber(first, second, third) {
    let max;

    if (first >= second) {
        max = first;
        if (first >= third) {
            max = first;
        } else {
            max = third;
        }
    } else {
        max = second;
        if (second >= third) {
            max = second;
        } else {
            max = third;
        }
    }

    console.log(max)
}

biggestNumber(2,
    2,
    2
    
    )
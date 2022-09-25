function spiceMustFlow(startingYield) {
    let expectedAmount = startingYield;
    let totalMined = 0;
    let days = 0;
    let daylyRasions = 26;

    while (expectedAmount >= 100) {
        totalMined += expectedAmount;
        totalMined -= daylyRasions;
        expectedAmount -= 10;
        days++;
    }

    totalMined -= daylyRasions;

    console.log(days);
    if (totalMined > 0) {
        console.log(totalMined);
    } else {
        console.log(0);
    }
    
}

spiceMustFlow(90)
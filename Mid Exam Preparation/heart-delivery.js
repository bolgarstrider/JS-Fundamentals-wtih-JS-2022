function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let commandLine = input.shift();
    let houseCount = neighborhood.length;
    let lastIndex = 0;

    while (commandLine !== 'Love!') {
        let command = commandLine.split(' ');
        let jumpLength = Number(command[1]);
        lastIndex += jumpLength;

        if (lastIndex >= neighborhood.length) {
            lastIndex = 0;
        }

        if (neighborhood[lastIndex] > 0) {
            neighborhood[lastIndex] -= 2;
            if (neighborhood[lastIndex] == 0) {
                console.log(`Place ${lastIndex} has Valentine's day.`);
                houseCount--;
            }
        } else {
            console.log(`Place ${lastIndex} already had Valentine's day.`);
        }

        commandLine = input.shift();
    }


    console.log(`Cupid's last position was ${lastIndex}.`)
    if (houseCount == 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

heartDelivery((["2@4@2",
        "Jump 2",
        "Jump 2",
        "Jump 8",
        "Jump 3",
        "Jump 1",
        "Love!"
    ])

);
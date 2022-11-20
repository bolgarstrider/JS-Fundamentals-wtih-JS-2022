

function perfectNumber(num) {

    let divider = [];
    let dividersSum = 0;

    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            divider.push(i);
            dividersSum += i;

        }
    }

    // let dividersSum = divider.reduce((a, b) => a + b, 0);

    if (dividersSum == num) {
        console.log(`We have a perfect number!`);

    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(28);
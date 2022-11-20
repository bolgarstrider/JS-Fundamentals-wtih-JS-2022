

function blackFlag(input) {
    const days = Number(input[0]);
    const dailyPlunder = Number(input[1]);
    const target = Number(input[2]);
    let plunder = 0;

    for (let i = 1; i <= days; i++) {
        plunder += dailyPlunder;

        if (i % 3 == 0) {
            plunder += dailyPlunder / 2;
        }

        if (i % 5 == 0) {
            plunder *= 0.7;
        }
    }

    if (plunder >= target) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (plunder / target) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}

blackFlag(["10",
"20",
"380"]
);

function buildAWall(input) {
    const price = 1900;
    const concrete = 195;
    let counter = 0;
    let totalConcrete = [];


    while (input.length > 0) {
        if (input.includes(30)) {
            input = input.filter(a => a < 30);
        }

        counter = input.length;

        totalConcrete.push(counter * concrete);

        input.forEach((element, i) => {
            input[i] = element + 1;
        });
        if (input.includes(30) || input.includes(31)) {
            input = input.filter(a => a < 30);
        }
    }

    let result1 = (totalConcrete.reduce((a, b) => a + b, 0)) * price + ' pesos '
    console.log(totalConcrete.join(', '));
    console.log(result1);
}

buildAWall([29,
    29,
    30
]);
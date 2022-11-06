function piccolo(input) {

    const parking = {};

    input.forEach(element => {
        let [action, carNumber] = element.split(', ');
        if (action === 'IN') {
            parking[carNumber] = action;
        } else {
            delete parking[carNumber];
        }
    });

    let sorted = Array.from(Object.keys(parking)).sort((a, b) => a.localeCompare(b));
    sorted.forEach(number => console.log(number))

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
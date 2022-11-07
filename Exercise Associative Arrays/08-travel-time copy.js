function travelTime(input) {
    const destinations = {};
    let inputLength = input.length;
    for (let i = 0; i < inputLength; i++) {
        const line = input[i];
        const [country, town, price] = line.split(' > ');
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        } 
        if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town]= Number(price);
        } 
        let oldPrice = destinations[country][town];
        if (oldPrice > price) {
            destinations[country][town] = Number(price);
        }
            
        
    }

    let alphaSorted = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

    for (const country of alphaSorted) {
        let output = `${country[0]} -> `;
        let sorted = Object.entries(country[1]).sort((a,b) => a[1] - b[1]);
        for (const sort of sorted) {
            output += `${sort[0]} -> ${sort[1]} `
        }

        console.log(output);
    }
    
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    )
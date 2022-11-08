// Write a function that collects and orders information about travel destinations.
// As input, you will receive an array of strings.
// Each string will consist of the following information with the format:
// "Country name > Town name > Travel cost"

// The Country name will be a string, the Town name will be a unique string, Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer. 
// Have in mind that one Country may have several Towns to visit.
// After you finish the organizational part, you need to let Steven know which destination point to visit first. 
// The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.

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
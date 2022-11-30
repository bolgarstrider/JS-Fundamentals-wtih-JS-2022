


function destinationMapper(string) {
    let pattern = /([=\/])(?<destination>[A-Z]+[A-Za-z]{2,})(\1)/g;
    let travelPoints = 0;
    let destinattions = [];

    let matches = string.matchAll(pattern);

    for (const match of matches) {
        destinattions.push(match.groups.destination);
        travelPoints += match.groups.destination.length;
    }



    console.log(`Destinations: ${destinattions.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

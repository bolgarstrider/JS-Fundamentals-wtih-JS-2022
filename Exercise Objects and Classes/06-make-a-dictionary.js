

function makeADictionary(input) {

    let dictionary = {};

    for (const line of input) {
        let parsed = JSON.parse(line);
        
        let term = Object.keys(parsed)[0];
        let definition = Object.values(parsed)[0];
      
        dictionary[term] = definition;
        
    }

    let sortedDictionaryKeys = Object.keys(dictionary);
    sortedDictionaryKeys = sortedDictionaryKeys.sort((a,b) => a.localeCompare(b));


    for (const term of sortedDictionaryKeys) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`)
    }


}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Coffee":"22222"}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
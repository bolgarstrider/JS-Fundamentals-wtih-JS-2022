// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"


function convertToObject(text) {
    let obj = JSON.parse(text);
    
    let objProperties = Object.entries(obj);

    for (const el of objProperties) {
        console.log(`${el[0]}: ${el[1]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
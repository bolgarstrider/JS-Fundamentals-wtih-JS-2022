

function convertToObject(text) {
    let obj = JSON.parse(text);
    
    let objProperties = Object.entries(obj);

    for (const el of objProperties) {
        console.log(`${el[0]}: ${el[1]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
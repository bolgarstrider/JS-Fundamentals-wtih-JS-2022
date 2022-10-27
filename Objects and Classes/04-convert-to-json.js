// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.


function convertToJSON(firstName, lastName, hairColor) {

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let textJ = JSON.stringify(person);
    console.log(textJ);
}

convertToJSON('George', 'Jones', 'Brown');



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
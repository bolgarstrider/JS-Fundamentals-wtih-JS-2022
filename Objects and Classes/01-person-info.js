// Write a function that receives 3 parameters, sets them to an object, and returns that object.
// The input comes as 3 separate strings in the following order: firstName, lastName, age.


function personInfo(fName, lName, age) {
    let person = {
        firstName: fName,
        lastName: lName,
        age: age,
    }
    
    return person;
}

personInfo("Peter",
    "Pan",
    "20"
)
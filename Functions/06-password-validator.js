// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"


function passwordValidator(password) {
    let passwordLength = password.length;
    let diggitCount = 0;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let currentNumber = Number(password[i])
        if (Number.isInteger(currentNumber)) {
            diggitCount++;
        }

        let currentChar = password[i].charCodeAt();
        if (currentChar < 48 || (currentChar > 57 && currentChar < 65) || (currentChar > 90 && currentChar < 97) || currentChar > 122) {
            isSymbol = true;
        }

    }


    if (passwordLength < 6 || passwordLength > 10) {
        console.log('Password must be between 6 and 10 characters');
    }


    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }


    if (diggitCount < 2) {
        console.log('Password must have at least 2 digits');
    }

    if ((passwordLength >= 6 && passwordLength <= 10) && !isSymbol && diggitCount >= 2) {
        console.log('Password is valid');
    }



}

passwordValidator('MyPass123');
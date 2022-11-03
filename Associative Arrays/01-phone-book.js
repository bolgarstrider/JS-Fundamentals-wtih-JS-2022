// Write a function that stores information about a person’s name and phone number. 
// The input is an array of strings with space-separated name and number. 
// Replace duplicate names. Print the result as shown.

function phoneBook(input) {
    let phoneBook = {};
    for (let line of input) {
        let [name, number] = line.split(' ');
        phoneBook[name] = number;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }

    
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
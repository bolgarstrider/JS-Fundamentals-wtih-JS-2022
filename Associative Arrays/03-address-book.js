

function addressBook(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');

        addressBook[name] = address;

    }

    let sortedAddressBook = Object.entries(addressBook);

    sortedAddressBook.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    let newAddressBook = Object.fromEntries(sortedAddressBook);
    
    for (let key in newAddressBook) {
        console.log(`${key} -> ${newAddressBook[key]}`);
    }
}

addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);
// Write a function, which keeps the information about companies and their employees. 
// You will receive an array of strings containing the company name and employee's id. 
// Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by their name in ascending order. 
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}

function companyUsers(input) {
    const companyList = {};
    input.forEach(line => {
        const [company, employee] = line.split(' -> ');

        if (!companyList[company]) {
            companyList[company] = new Set();
            companyList[company].add(employee)
        } else {
            companyList[company].add(employee);
        }

    });

    let sorted = Array.from(Object.entries(companyList)).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (const element of sorted) {

        console.log(element[0]);

        for (const item of element[1].values()) {
            console.log(`-- ${item}`)
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
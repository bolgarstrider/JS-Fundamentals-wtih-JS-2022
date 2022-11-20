
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
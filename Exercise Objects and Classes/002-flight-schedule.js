function flightSchedule(input) {
    let arr1 = input[0];
    let arr2 = input[1];
    let arr3 = input[2];

    let flights = {}
    let arr1Length = arr1.length

    for (let i = 0; i < arr1Length; i++) {
        let [flightNumber, Destination] = arr1[i].split(' ');
        flights[flightNumber] = {
            Destination,
            Status: 'Ready to fly'
        };
    }

    arr2.forEach(element => {
        let [flightNumber, Status] = element.split(' ');
        if (flights.hasOwnProperty(flightNumber)) {
            flights[flightNumber].Status = Status;
        }
    });

    for (let fly in flights) {
        if (flights[fly].Status === String(arr3)) {
            console.log(flights[fly]);
        }
    }



    


}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
);


function Meetings(input) {
    let schedule = {}

    for (const line of input) {
        let [day, name] = line.split(' ');

        if(schedule[day]){
            console.log(`Conflict on ${day}!`)
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`)
        }        
    }

    for (let day in schedule) {
        console.log(`${day} -> ${schedule[day]}`)
    }
}

Meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);
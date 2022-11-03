// Write a function that manages meeting appointments. 
// The input comes as an array of strings. Each string contains a weekday and person’s name. 
// For each successful meeting, print a message. If you receive the same weekday twice, 
// the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings. 


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
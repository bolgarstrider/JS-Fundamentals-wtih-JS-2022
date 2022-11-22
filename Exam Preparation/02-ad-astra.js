


function adAstra(input) {

    const string = input.shift();

    const pattern = /([#|\|])(?<item>[A-Za-z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,4})\1/g;

    let cal = 0;
    


    let food = string.matchAll(pattern);
    let output = [];

    for (const match of food) {
        cal += Number(match.groups.calories);
        output.push(`Item: ${match.groups.item}, Best before: ${match.groups.expDate}, Nutrition: ${match.groups.calories}`);
        
    }
    let days = Math.floor(cal / 2000);
    console.log(`You have food to last you for: ${days} days!`)
    output.forEach(element => {
        console.log(element);
    });

}

adAstra([ '#Ice Cream#03/10/21#9000#$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);

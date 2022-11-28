


function worldTour(input) {
    let tourPlan = input.shift();

    let currentLine = input.shift();

    while (currentLine !== "Travel") {
        let commands = currentLine.split(':');
        let command = commands[0];

        switch (command) {
            case 'Add Stop':
                let atIndex = Number(commands[1]);
                let addStop = commands[2];

                if (atIndex < tourPlan.length && atIndex >= 0) {
                    tourPlan = tourPlan.substring(0, atIndex).concat(addStop).concat(tourPlan.substring(atIndex));
                }
                console.log(tourPlan);
                break;
            case 'Remove Stop':
                let startIndex = Number(commands[1]);
                let endIndex = Number(commands[2]);
                if (startIndex >= 0 && startIndex < tourPlan.length && endIndex >= 0 && endIndex < tourPlan.length) {
                    toRemove = tourPlan.substring(startIndex, endIndex + 1);
                    tourPlan = tourPlan.replace(toRemove, '');
                }
                console.log(tourPlan);
                break;
            case 'Switch':
                let oldStop = commands[1];
                let newStop = commands[2];
                if (tourPlan.includes(oldStop)) {
                    tourPlan = tourPlan.replace(oldStop, newStop);
                }
                console.log(tourPlan);
                break;
        }
        currentLine = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${tourPlan}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
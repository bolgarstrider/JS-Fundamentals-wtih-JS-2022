

function movingTarget(input) {
    let targets = input.shift().split(' ').map(x => x = Number(x));
    let commandLine = input.shift();

    while (commandLine !== 'End') {
        commandLine = commandLine.split(' ');
        let action = commandLine.shift();
        let index = Number(commandLine.shift());
        let power = Number(commandLine.shift());

        switch (action) {
            case 'Shoot':
                if (targets[index]) {
                    targets[index] -= power;
                }
                if (targets[index] <= 0) {
                    targets = targets.filter(x => x !== targets[index])
                }
                break;
            case 'Add':
                if ((targets[index])) {
                    targets.splice(index, 0, power);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let radius = power;
                let leftIndex = index - radius;
                let rightIndex = index + radius;
                if (targets[index] && targets[leftIndex] && targets[rightIndex]) {
                    targets.splice(leftIndex, radius * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }

                break;
        }
        commandLine = input.shift();
    }

    console.log(targets.join('|'))
}

movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])

);
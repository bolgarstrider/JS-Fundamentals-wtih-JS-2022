function activationKeys(input) {
    let rawKey = input.shift();

    let command = input.shift();

    while (command !== "Generate") {
        let currentAction = command.split('>>>');

        if (currentAction.includes('Contains')) {
            if (rawKey.includes(currentAction[1])) {
                console.log(`${rawKey} contains ${currentAction[1]}`);
            } else {
                console.log('Substring not found!');
            }

        } else if (currentAction.includes('Flip')) {
            if (currentAction.includes('Upper')) {
                let substring = rawKey.substring(currentAction[2], currentAction[3]);
                let replaced = substring.toUpperCase();
                rawKey = rawKey.replace(substring, replaced);
                console.log(rawKey)

            } else if (currentAction.includes('Lower')) {
                let substring = rawKey.substring(currentAction[2], currentAction[3]);
                let replaced = substring.toLowerCase();
                rawKey = rawKey.replace(substring, replaced);
                console.log(rawKey)
            }

        } else if (currentAction.includes('Slice')) {            
            let substring = rawKey.slice(currentAction[1], currentAction[2]);
            rawKey = rawKey.replace(substring, '');
            console.log(rawKey);
        }

        command = input.shift();
    }

    console.log(`Your activation key is: ${rawKey}`)
}

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
;
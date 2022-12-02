
function thePianist(input) {
    const num = Number(input.shift());

    let artistArray = [];
    let artist = {};

    for (let i = 0; i < num; i++) {
        const [piece, composer, key] = input.shift().split('|');
        artist = {
            piece: piece,
            composer: composer,
            key: key
        }

        artistArray.push(artist);
    }

    let currentLine = input.shift();

    while (currentLine !== 'Stop') {
        const tokens = currentLine.split('|');
        const action = tokens[0];
        const piece = tokens[1];
        //find the object with the same piece in the array
        const result = artistArray.find(x => x.piece === piece);
        const indexRes = artistArray.indexOf(result);

        let composer;
        let key;

        switch (action) {
            case 'Add':
                composer = tokens[2];
                key = tokens[3];

                //if result == undefined add the piece to the array
                if (!result) {
                    artist = {
                        piece: piece,
                        composer: composer,
                        key: key
                    }
                    artistArray.push(artist);
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {

                    console.log(`${piece} is already in the collection!`);
                }
                break;

            case 'Remove':
                if (result) {
                    artistArray.splice(indexRes, 1);
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;

            case 'ChangeKey':
                key = tokens[2]; // the new key
                if(result) {
                    artistArray[indexRes].key = key;
                    console.log(`Changed the key of ${piece} to ${key}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
        }
        currentLine = input.shift();
    }


    for (const artist of artistArray) {
        console.log(`${artist.piece} -> Composer: ${artist.composer}, Key: ${artist.key}`);
    }
}


thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
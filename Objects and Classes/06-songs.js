// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format:
//  "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter).
//  If the value of the last element is "all", print the names of all the songs.


function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time

        }
    }

    let songs = [];

    numberOfSongs = Number(input.shift());


    for (let i = 0; i < numberOfSongs; i++) {
        let currentSong = input.shift().split('_');
        songs.push(new Song(currentSong[0], currentSong[1], currentSong[2]))
    }    

    let category = input.shift();

    if (category != 'all') {
        for (const song of songs) {
            if (song.typeList == category){
                console.log(song.name)
            }
        }

    } else {
        for (const song of songs) {
            console.log(song.name);
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    );
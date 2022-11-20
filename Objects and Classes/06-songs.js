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
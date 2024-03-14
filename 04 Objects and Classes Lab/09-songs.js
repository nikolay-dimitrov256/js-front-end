function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const numberOfSongs = input.shift();
    const searchedType = input.pop();

    for (const line of input) {
        let [typeList, name, time] = line.split('_');
        let song = new Song(typeList, name, time);

        if (searchedType === song.typeList | searchedType === 'all') {
            console.log(song.name);
        }
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
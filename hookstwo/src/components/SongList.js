import React, {useState} from 'react';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'superbass', id: 1},
        {title: 'roman revenge', id: 2},
        {title: 'massive attack', id: 3},
        {title: 'pills and potions', id: 4}

    ]);

    const addSong = () => {
        setSongs([...songs, {title: 'new song', id: 5}])
    }
    return (
        <div className="song-list">
            <ul>
               {songs.map( song => {return (<li key={song.id}>{song.title}</li>) })}
            </ul>
            <button onClick={addSong}>add a song</button>

        </div>
      );
}
 
export default SongList;


// keys need to ne
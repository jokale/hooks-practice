import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

// uuidv4();
// const { v4: uuidv4 } = require('uuid');

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'superbass', id: 1},
        {title: 'roman revenge', id: 2},
        {title: 'massive attack', id: 3},
        {title: 'pills and potions', id: 4}

    ]);

    const addSong = () => {
        setSongs([...songs, {title: 'new song', id: uuidv4()}])
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


// keys need to be unique utilising uuid ensures that i need not have the same key or rather hard code it 
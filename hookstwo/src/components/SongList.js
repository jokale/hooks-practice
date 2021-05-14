import React, {useState} from 'react';

const SongList = () => {
    useState([
        {title: 'superbass', id: 1},
        {title: 'roman revenge', id: 2},
        {title: 'massive attack', id: 3}

    ]);
    return (
        <div className="song-list">
            <ul>
                <li>superbass</li>
                <li>roman revenge</li>
                <li>massive attack</li>

            </ul>

        </div>
      );
}
 
export default SongList;
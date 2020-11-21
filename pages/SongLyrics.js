import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../Context';
import SongDetail from '../component/SongDetail';

function SongLyrics() {
    const { songs } = useContext(Context);

    const { id } = useParams();
    console.log(id);

    const lyrics = songs.map(song => {
         if (song.id === Number(id)) {
        return <SongDetail key={song.id} song={song} />
    }})

    return (
        <div>
            {lyrics}
        </div>
    )
}

export default SongLyrics

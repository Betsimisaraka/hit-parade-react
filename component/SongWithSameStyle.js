import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context';

function SongWithSameStyle() {
    const { songs } = useContext(Context);
    const { styles } = useParams();

    const mapStyles = songs.map(song => {
        if (song.styles === styles) {
            return <SameStylesSong key={song.id} song={song} />
        }
    })

    return (
        <div>
            {mapStyles}
        </div>
    )
}

export default SongWithSameStyle

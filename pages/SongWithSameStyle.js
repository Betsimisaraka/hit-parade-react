import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context';
import SameStylesSongs from '../component/SameStylesSongs';

function SongWithSameStyle() {
    const { songs } = useContext(Context);
    const { styleName } = useParams();

    const mapStyles = songs.map(song => {
        if (song.styles === styleName) {
            return <SameStylesSongs key={song.id} song={song} />
        }
    })

    return (
        <div>
            <h2>🎧 {styleName}</h2>
            {mapStyles}
        </div>
    )
}

export default SongWithSameStyle

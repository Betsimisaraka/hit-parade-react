import React, { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom';

function Styles() {
    const { songs } = useContext(Context);
    console.log(songs);

    const mapSongs = songs.map(song => (
        <button key={song.id} value={song.styles}><Link to={`/styles/${song.styles}`}>🎧 {song.styles}</Link></button>
    ))

    return (
        <div className="styles">
            <h2 className="styles-heading">🎧 Here is the styles</h2>
            <div className="styles-container">
                {mapSongs}
            </div>
        </div>
    )
}

export default Styles

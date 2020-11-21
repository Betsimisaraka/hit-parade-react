import React, { useContext } from 'react'
import { Context } from '../Context'
import { Link, useParams } from 'react-router-dom';

function Styles() {
    const { songs } = useContext(Context);
    console.log(songs);

    const mapSongs = songs.map(song => (
        <button key={song.id} value={song.styles}><Link to={`/styles/${song.styles}`}>🎧 {song.styles}</Link></button>
    ))

    return (
        <div>
            <h2>Here is the styles</h2>
            <form className="styles-container">
                {mapSongs}
            </form>
        </div>
    )
}

export default Styles

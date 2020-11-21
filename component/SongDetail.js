import React from 'react'

function SongDetail({ song }) {
    return (
        <div>
            <h3>{song.author}: {song.title}</h3>
            <p>{song.lyrics}</p>
        </div>
    )
}

export default SongDetail;

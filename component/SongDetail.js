import React from 'react'

function SongDetail({ song }) {
    return (
        <div>
            <h2 className="lyrics-heading">{song.author}: {song.title}</h2>
            <div className="lyrics-detail">
                <h3 className="lyrics">Lyrics</h3>
                <p className="lyrics-lyrics">{song.lyrics}</p>
            </div>
        </div>
    )
}

export default SongDetail;

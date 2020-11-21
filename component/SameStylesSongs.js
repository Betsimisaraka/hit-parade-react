import React from 'react'

function SameStylesSongs({ song }) {
    return (
        <div className="same-styles">
            <h2 className="same-styles-title title">{song.title}</h2>
            <p className="same-styles-author author">{song.author}</p>
        </div>
    )
}

export default SameStylesSongs

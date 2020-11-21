import React from 'react'

function SameStylesSongs({ song }) {
    return (
        <div className="same-styles">
            <h3 className="same-styles-title">{song.title}</h3>
            <p className="same-styles-author">{song.author}</p>
        </div>
    )
}

export default SameStylesSongs

import React from 'react'

function SameStylesSongs({ song }) {
    return (
        <div className="same-styles">
            <h3>{song.title}</h3>
            <p>{song.author}</p>
        </div>
    )
}

export default SameStylesSongs

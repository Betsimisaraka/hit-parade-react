import React, { useContext } from 'react';
import {Context} from '../Context';
import songs from '../songs';

function DisplaySongList({ song }) {
    const {handleUpvotes, handleDownvotes} = useContext(Context);
    return (
        <li className="list-items">
            <p className="heart-icon-line">💛</p>
            <div className="heading">
                <h2>{song.title}</h2>
                <p>{song.author}</p>
            </div>
            <div className="upvotes">
                <span>{song.upvotes}
                </span>
                <button onClick={() => handleUpvotes(song.id)}> ↑ </button>
            </div>
            <div className="downvotes">
                <span>{song.downvotes}
                </span>
                <button onClick={() => handleDownvotes(song.id)}> ↓ </button>
            </div>
            <p className="cart-icon-line">🚔</p>
            <button className="song-lyrics">...</button>
        </li>
    )
}

export default DisplaySongList

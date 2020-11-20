import React, { useContext, useState } from 'react';
import { Context } from '../Context';

function DisplaySongList({ song }) {
    const { handleUpvotes, handleDownvotes } = useContext(Context);

    const heartIcon = <i className="ri-heart-line favorite"></i>;
    const cartIcon = <i className="ri-add-circle-line cart"></i>;

    return (
        <li className="list-items">
            <p
                className="heart-icon-line">{heartIcon}
            </p>
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
            <div className="cart-icon-line">{cartIcon}</div>
            <button className="song-lyrics">...</button>
        </li>
    )
}

export default DisplaySongList

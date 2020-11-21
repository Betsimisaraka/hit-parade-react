import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function DisplaySongList({ song }) {
    const { 
        handleUpvotes, 
        handleDownvotes, 
        handleFavorited,
        carts,
        addToCart,
        deleteFromCart,
    } = useContext(Context);

    function heartIcon() {
        if (song.isFavorited) {
            return <i onClick={() => handleFavorited(song.id)} className="ri-heart-fill favorite"></i>
        } else {
            return <i onClick={() => handleFavorited(song.id)} className="ri-heart-line favorite"></i>
        }
    }

    function cartIcon() {
        const moveToCart = carts.some(cart => cart.id === song.id)
        if (moveToCart) {
            return <i onClick={() => deleteFromCart(song.id)} className="ri-shopping-cart-fill cart"></i>
        } else {
            return <i onClick={() => addToCart(song)} className="ri-add-circle-line cart"></i>
        }
    }

    return (
        <li className="list-items">
            <p
                className="heart-icon-line">{heartIcon()}
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
            <div className="cart-icon-line">{cartIcon()}</div>
            <Link to={`/song/${song.id}`}> <p className="song-lyrics">...</p></Link>
        </li>
    )
}

export default DisplaySongList

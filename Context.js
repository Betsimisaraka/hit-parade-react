import React, { useEffect, useState } from 'react'
const Context = React.createContext();
import SongsData from './songs';

function ContextProvider({ children }) {
    const [songs, setSongs] = useState([]);
    const [carts, setCarts] = useState([]);

    function getSongs() {
        setSongs(SongsData)
    }

    useEffect(() => {
        getSongs();
    }, [])

    function handleFavorited(id) {
        const findFavorite = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    isFavorited: !song.isFavorited,
                }
            }
            return song;
        });
        setSongs(findFavorite);
    }

    function handleUpvotes(id) {
        const findUpvotes = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    upvotes: song.upvotes + 1,
                }
            }
            return song;
        });
        setSongs(findUpvotes);
    }

    function handleDownvotes(id) {
        const findDownvotes = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    downvotes: song.downvotes + 1,
                }
            }
            return song;
        });
        setSongs(findDownvotes);
    }

    function addToCart(newSong) {
        setCarts(prevCart => [...prevCart, newSong]);
    }

    function deleteFromCart(id) {
        const filteredCart = carts.filter(cart => cart.id !== id)
        setCarts(filteredCart);
    }

    function emptyCart() {
        setCarts([])
    }

    function addNewSongs(e) {
        e.preventDefault();
        const form = e.target;
        const newSongs = {
            title: form.title.value,
            author: form.artist.value,
            styles: form.styles.value,
            upvotes: 0,
            downvotes: 0,
            isFavorited: false,
            price: form.price.value,
            lyrics: form.lyrics.value,
            id: Date.now(),
        }
        const addSongs = [...songs, newSongs]
        setSongs(addSongs);
        form.reset();
    }

    return (
        <div>
            <Context.Provider value={{
                songs,
                handleUpvotes,
                handleDownvotes,
                handleFavorited,
                carts,
                addToCart,
                deleteFromCart,
                emptyCart,
                addNewSongs,
            }}>
                {children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

import React, { useEffect, useState } from 'react'
const Context = React.createContext();
import SongsData from './songs';

function ContextProvider({ children }) {
    const [songs, setSongs] = useState([]);

    function getSongs() {
        setSongs(SongsData)
    }

    useEffect(() => {
        getSongs();
    }, [])

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

    return (
        <div>
            <Context.Provider value={{ songs, handleUpvotes, handleDownvotes }}>
                {children}
            </Context.Provider>
        </div>
    )
}

export { ContextProvider, Context }

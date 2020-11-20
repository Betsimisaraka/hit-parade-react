import React, { useEffect, useState } from 'react'
const Context = React.createContext();
import SongsData from './songs';

function ContextProvider({ children }) {
    const [songs, setSongs] = useState([]);
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    function getSongs() {
        setSongs(SongsData)
    }

    useEffect(() => {
        getSongs();
    }, [])

    function handleUpvotes(id) {
        const findId = songs.find(song => song.id === id);
        const findUpvotes = findId.upvotes++;
        setUpvotes(findUpvotes);
    }

    function handleDownvotes(id) {
        const findId = songs.find(song => song.id === id);
        const findDownvotes = findId.downvotes++;
        setDownvotes(findDownvotes);
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

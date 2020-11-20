import React, { useContext } from 'react'
import DisplaySongList from '../component/DisplaySongList';
import { Context } from '../Context';

function Home() {
    const { songs } = useContext(Context);

    const displaySongs = songs
        .sort((a, b) => {
            const votesA = a.upvotes - a.downvotes;
            const votesB = b.upvotes - b.downvotes;
            return votesB - votesA;
        })
        .map(song => <DisplaySongList key={song.id} song={song} />);

    return (
        <div>
            <ul className="song-list">
                {displaySongs}
            </ul>
        </div>
    )
}

export default Home

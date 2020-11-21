import React, { useContext } from 'react'
import { Context } from '../Context'
import { Link, useParams } from 'react-router-dom';

function Styles() {
    const { songs } = useContext(Context);
    console.log(songs);
    const { styles } = useParams();
    console.log(styles);

    return (
        <div>
            <h2>Here is the styles</h2>
            <form className="styles-container">
                <Link to={`/styles/${styles}`}>
                    <button value="salegy">🎧 Salegy</button>
                    <button value="rock">🎧 Rock</button>
                    <button value="slow">🎧 Slow</button>
                    <button value="bassesa">🎧 Bassesa</button>
                    <button value="rap">🎧 Rap</button>
                    <button value="folk">🎧 Folk</button>
                    <button value="reggae">🎧 Reggae</button>
                </Link>
            </form>
        </div>
    )
}

export default Styles

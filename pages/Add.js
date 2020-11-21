import React, { useContext } from 'react'
import { Context } from '../Context'

function Add() {
    const { addNewSongs } = useContext(Context);
    return (
        <div>
            <h2>Add a Song with Lyrics</h2>
            <form onSubmit={(e) => addNewSongs(e)}>
                <fieldset>
                    <input type="text" name="title" id="title" placeholder="Title" required />
                </fieldset>
                <fieldset>
                    <input type="text" name="artist" placeholder="Artist" id="artist" required />
                </fieldset>
                <fieldset>
                    <input type="number" id="price" name="price" placeholder="Price" required />
                </fieldset>
                <select name="styles" id="styles">
                    <option value="">Style</option>
                    <option value="salegy">Salegy</option>
                    <option value="rock">Rock</option>
                    <option value="slow">Slow</option>
                    <option value="bassesa">Bassesa</option>
                    <option value="rap">Rap</option>
                    <option value="folk">Folk</option>
                    <option value="reggae">Reggae</option>
                </select>
                <fieldset>
                    <textarea name="lyrics" id="lyrics" placeholder="Lyrics">

                    </textarea>
                </fieldset>
                <button className="submit" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add

import React, { useContext } from 'react'
import { Context } from '../Context'

function Add() {
    const { addNewSongs } = useContext(Context);
    return (
        <div>
            <h2 className="add-heading">🧑🏿 Add a new Song</h2>
            <form className="add-form" onSubmit={(e) => addNewSongs(e)}>
                <div>
                    <fieldset>
                        <input type="text" name="title" id="title" placeholder="Title" required />
                    </fieldset>
                    <fieldset>
                        <input type="text" name="artist" placeholder="Artist" id="artist" required />
                    </fieldset>
                    <fieldset>
                        <input type="number" id="price" name="price" placeholder="Price" required />
                    </fieldset>
                    <select name="styles" id="styles" className="select">
                        <option className="default" value="">Style</option>
                        <option value="salegy">Salegy</option>
                        <option value="rock">Rock</option>
                        <option value="slow">Slow</option>
                        <option value="bassesa">Bassesa</option>
                        <option value="rap">Rap</option>
                        <option value="folk">Folk</option>
                        <option value="reggae">Reggae</option>
                    </select>
                    <fieldset>
                        <textarea name="lyrics" id="lyrics" placeholder="Lyrics" rows="10" cols="33">
                        </textarea>
                    </fieldset>
                </div>
                <button className="submit" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add

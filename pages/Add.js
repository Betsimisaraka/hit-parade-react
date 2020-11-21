import React from 'react'

function Add() {
    return (
        <div>
            <h2>Add a Song with Lyrics</h2>
            <form>
                <fieldset>
                    <input type="text" name="title" id="title" placeholder="Title" />
                </fieldset>
                <fieldset>
                    <input type="text" name="artist" placeholder="Artist" id="artist" />
                </fieldset>
                <fieldset>
                    <input type="number" id="price" name="price" placeholder="Price" />
                </fieldset>
                <select name="styles" id="styles">
                    <option value="salegy">Salegy</option>
                    <option value="rock">Rock</option>
                    <option value="slow">Slow</option>
                    <option value="bassesa">Bassesa</option>
                    <option value="rap">Rap</option>
                    <option value="folk">Folk</option>
                    <option value="reggae">Reggae</option>
                </select>
                <fieldset>
                    <textarea name="lyrics" id="lyrics"></textarea>
                </fieldset>
                <button className="submit" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add

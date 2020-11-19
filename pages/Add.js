import React from 'react'

function Add() {
    return (
        <div>
            <h2>Add a Song with Lyrics</h2>
            <form>
                <fieldset>
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" />
                </fieldset>
                <fieldset>
                    <label for="artist">Artist</label>
                    <input type="text" name="artist" placeholder="Artist" id="artist" />
                </fieldset>
                <fieldset>
                    <label for="price">Price</label>
                    <input type="number" id="price" name="price" placeholder="Price" />
                </fieldset>
                <label for="styles"></label>
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
                    <label for="lyrics"></label>
                    <textarea name="lyrics" id="lyrics"></textarea>
                </fieldset>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add

import React, { useContext } from 'react'
import { Context } from '../Context';

function CartLists({ cart }) {
    const {deleteFromCart} = useContext(Context);
 
    return (
        <li className="cart-items">
            <i onClick={() => deleteFromCart(cart.id)} className="ri-delete-bin-line delete"></i>
            <div className="title-author">
                <h3>{cart.title}</h3>
                <p>{cart.author}</p>
            </div>
            <span className="price">${cart.price}</span>
        </li>
    )
}

export default CartLists;

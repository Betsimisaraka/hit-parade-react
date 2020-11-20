import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartLists from '../component/CartLists';

function Cart() {
    const { carts, emptyCart } = useContext(Context);
    const [buyBtnText, setBuyBtnText] = useState("Buy now");
    const totalCost = carts.length * 8000;
    const price = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

    const displayCarts = carts.map(cart => (
        <CartLists key={cart.id} cart={cart} />
    ))

    function buyBtn() {
        setBuyBtnText("Buying...");
        setTimeout(() => {
            console.log("Buying cart");
            emptyCart();
            setBuyBtnText("Buy now");
        }, 4000);
    }

    return (
        <div className="cart-container">
            <ul className="cart-list">
                {displayCarts}
            </ul>
            <span className="total-price">Total: {price}</span>
            {carts.length > 0 
                ? <button onClick={buyBtn} className="order-button">{buyBtnText}</button>
                : <p>You don't have any items in your cart</p>
            }
        </div>
    )
}

export default Cart

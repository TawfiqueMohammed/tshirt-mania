import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Please, Add some items.</h5>
            <p>Please kinen</p>
        </div>
    }
    else {
        command = <div>Thanks for adding items</div>
    }
    return (
        <div>
            <h2>Items selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Clear all</button>}
        </div>
    );
};

export default Cart;
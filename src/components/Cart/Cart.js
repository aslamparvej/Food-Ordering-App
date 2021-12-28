import React from "react";

const Cart = (props)=>{
    const CartItems = <ul className={classes['cart-items']}>[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => (<li>{item.name}</li>))</ul>;
    return (
        <div >
            {CartItems}
            <div>
                <span >Total Amount</span>
                <span >35.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
}
export default Cart; 
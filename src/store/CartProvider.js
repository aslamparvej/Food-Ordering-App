import React from "react";
import CartContetxt from "./Cart-Context";

const CartProvider = (props)=>{
    const addItemToCartHandler = (item)=>{

    }
    const removeItemFromCartHandler = (id) =>{

    }
    const cartContetxt = {
        items: [],
        totalAMount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler

    }
    return (
        <CartContetxt.Provider value={cartContetxt}>
            {props.children}
        </CartContetxt.Provider>
    )
}
export default CartProvider;
import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartItem from "../Cart/CartIcon";

const HeaderCartButton = (props)=>{
    return <button className={classes.button} onClick={props.onShow}>
        <span className={classes.icon}>
            <CartItem />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
};
export default HeaderCartButton;
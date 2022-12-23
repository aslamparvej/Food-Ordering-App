import React,{useContext} from "react";
import classes from "./HeaderCartButton.module.css";
import CartItem from "../Cart/CartIcon";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props)=>{
    const cartCtx =  useContext(CartContext);

    const numberOfCartItem = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);
    
    return <button className={classes.button} onClick={props.onShow}>
        <span className={classes.icon}>
            <CartItem />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
};
export default HeaderCartButton;
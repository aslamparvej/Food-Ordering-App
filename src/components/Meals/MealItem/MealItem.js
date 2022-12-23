import React,{useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContetxt from "../../../store/Cart-Context";

const MealItem = (props) => {
    const cartCtx = useContext(CartContetxt);
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h1>{props.title}</h1>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddCart={addToCartHandler}/>
            </div>
        </li>
    );
}
export default MealItem;
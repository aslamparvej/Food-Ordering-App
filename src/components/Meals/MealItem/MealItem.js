import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h1>{props.title}</h1>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
            </div>
        </li>
    );
}
export default MealItem;
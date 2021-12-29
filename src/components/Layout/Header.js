import React,{Fragment} from "react";
import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 >Delicious Meals</h1>
                <HeaderCartButton onShow={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="meal"/>
            </div>
        </Fragment>
    );
}
export default Header;
import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailbleMeals from "./AvailbleMeals";

const Meals = () => {
    return (
        <Fragment >
            <MealsSummary />
            <AvailbleMeals />
        </Fragment>
    );
}
export default Meals;
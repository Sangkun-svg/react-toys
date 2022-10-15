import React from "react";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
import mealImg from "../../assets/meals.jpg";

export const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt={"meals"} />
      </div>
    </React.Fragment>
  );
};

import React from "react";
import classes from "./Header.module.css";
import * as mealImg from "../../assets/meals.png";

export const Header = (props: any) => {
  return (
    <React.Fragment>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={String(mealImg)} alt={"meals"} />
      </div>
    </React.Fragment>
  );
};

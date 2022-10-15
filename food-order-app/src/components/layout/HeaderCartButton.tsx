import { CartIcon } from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
export const HeaderCartButton = ({ children }: any) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

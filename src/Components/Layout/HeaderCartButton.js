import CartLogo from "./CartLogo";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Store/Cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  const numOfCartItems = CartCtx.items.reduce((carNumber, item) => {
    return carNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartLogo />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

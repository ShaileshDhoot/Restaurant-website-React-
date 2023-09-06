import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cart-context';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext)
  // const noOfCartItems = cartCtx.items.reduce((acc, item)=> acc+parseInt(item.amount ,10) ,0)
  const noOfCartItems = cartCtx.items.length
  

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
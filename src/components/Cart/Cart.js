import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  let totalAmount = 0;
  for (const item of cartCtx.items) {

    totalAmount += item.price ;
  }

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id}>
      <div>{item.name}</div>
      <div>{item.amount}</div>
      <div>${item.price.toFixed(2)}</div>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
       <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

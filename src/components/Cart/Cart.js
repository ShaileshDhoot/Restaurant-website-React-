import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/Cart-context';

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  let totalAmount = 0;
  for (const cartItem of cartCtx.items) {
    totalAmount += cartItem.item.price * cartItem.quantity;
  }

  const cartItems = cartCtx.items.map((cartItem) => (
    <li key={cartItem.item.id}>
      <div>Name :{cartItem.item.name}</div>
      <div>Quantity : {cartItem.quantity}</div>
      <div>Price: ${cartItem.item.price}</div>
       <div>
        <button onClick={() => cartCtx.addItem(cartItem.item)}>+</button>
        <button onClick={() => cartCtx.removeItem(cartItem.item.id)}>-</button>
      </div>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
       <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

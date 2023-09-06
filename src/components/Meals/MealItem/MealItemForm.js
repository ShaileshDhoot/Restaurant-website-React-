import { useContext } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/Cart-context';

const MealItemForm = (props) => {

  const cartCntx = useContext(CartContext)

  const addItemToCart = (e) => {
    e.preventDefault()
    cartCntx.addItem(props.item)
  }
  

  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={addItemToCart}> Add</button>
    </form>
  );
};

export default MealItemForm;
import CartContext from "./Cart-context"
import React, { useState } from "react"

const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([])

    const addItemToCartHandler = (item) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = [...prevCartItems];
          const existingCartItemIndex = updatedCartItems.findIndex(
            (cartItem) => cartItem.item.id === item.id
          );
      
          if (existingCartItemIndex !== -1) {
            updatedCartItems[existingCartItemIndex].quantity += 1;
          } else {
            updatedCartItems.push({ item: item, quantity: 1 });
          }
      
          return updatedCartItems;
        });
    };
    const removeItemToCartHandler = (id) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = prevCartItems.map((cartItem) => {
            if (cartItem.item.id === id) {
              if (cartItem.quantity === 1) {
                return null; //mark that quantity as null to filter it out from cart list)
              } else {
                // If the quantity > 1
                return { ...cartItem, quantity: cartItem.quantity - 1 };
              }
            }
            return cartItem;
          });
      
          // Filter out the items marked as null (to remove them)
          return updatedCartItems.filter((cartItem) => cartItem !== null);
        });
    };
      
      
    const cartContext = {
        items: cartItems,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler

        }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
    

}

export default CartProvider
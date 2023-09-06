import CartContext from "./Cart-context"
import React, { useState } from "react"

const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([])

    const addItemToCartHAndler = (item) => {
        setCartItems((prevCartItems)=> [...prevCartItems, item])
    }
    const removeItemToCartHandler = (id) => {
        setCartItems((prevCartItems)=>{
            prevCartItems.filter((item)=>item.id!==id)
        })
    }
    const cartContext = {
        items: cartItems,
        totalAmount: 0,
        addItem: addItemToCartHAndler,
        removeItem: removeItemToCartHandler

        }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
    

}

export default CartProvider
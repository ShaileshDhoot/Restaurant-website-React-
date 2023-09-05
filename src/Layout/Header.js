import React from "react";
import classes from './Header.module.css';
import CartButton from "./HeaderCartButton";

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h2>Reactmeals</h2>
            <CartButton />
        </header>
        <div></div>
    </>
}

export default Header;
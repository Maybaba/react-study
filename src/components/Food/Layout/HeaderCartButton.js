import React, {useContext, useState} from 'react';

import styles from './HeaderCartButton.module.scss';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {

    const {cartItems} = useContext(CartContext);

    //reduce 활용하기 : 초기값이 마지막에 꼭 있어야 함
    const numberOfCart = cartItems.reduce((accumulator, current) => {
        console.log('accum :', accumulator);
        console.log('current :', current);
        return accumulator + current.amount; //어큠이 계속 누적되어 쌓인다.
    }, 0);

    const calcTotalAmount = () => {
        let totalAmount = 0;
        for (const item of cartItems) {
            totalAmount += item.amount;
        }
        return totalAmount;
    }

    const {button, icon, badge} = styles;

    return (
        <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
            <span>My Cart</span>
            <span className={badge}>{numberOfCart}</span>
        </button>
    );
};

export default HeaderCartButton;

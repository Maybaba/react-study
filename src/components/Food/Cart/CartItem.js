import React, {useContext} from 'react';

import styles from './CartItem.module.scss';
import CartContext from "../../../store/cart-context";

const CartItem = ({ cart }) => {

    const { addItem } = useContext(CartContext); //provider 사용하려면 이렇게 임포트 해줘야 한다.

    const { name, price, amount } = cart;

    const {
        'cart-item': cartItem,
        summary,
        price: priceStyle,
        amount: amountStyle,
        actions
    } = styles;
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    // 하나씩 cart dkdlxpa tnfid 추가하기
    const cartAddHandler = e => {

        //장바구니에 보낼 객체
        const item = {
            ...cart, //기존
            amount: 1,
        }

        addItem(item);
    }

    return (
        <li className={cartItem}>
            <div>
                <h2>{name}</h2>
                <div className={summary}>
                    <span className={priceStyle}>{formatPrice}</span>
                    <span className={amountStyle}> {amount}</span>
                </div>
            </div>
            <div className={actions}>
                <button> − </button>
                <button className={cartAddHandler}> + </button>
            </div>
        </li>
    );
};

export default CartItem;

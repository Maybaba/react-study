import React, {useContext, useEffect, useState} from 'react';

import styles from './HeaderCartButton.module.scss';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {
    // bump 애니메이션을 제어하는 상태변수
    const [isBump, setIsBump] = useState(false);

    // 장바구니 배열
    const {cartItems} = useContext(CartContext);

    const numberOfCart = cartItems.reduce((accum, current) => accum + current.amount, 0);

    const {button, icon, badge, bump} = styles;

    useEffect(() => {
        console.log('useEffect시행'); //카트아ㅣ이템의 스테이트가 변할 때마다이펙트 시랭
        if (cartItems.length === 0) return;
        setIsBump(true);

        //애니메이션 실행 후 클래스 제거 : 비동기이므로 타임아웃 주어야 함
        const timer = setTimeout(() => {
            setIsBump(false);
        }, 300); //디바운싱이랑 비슷하다. 화면을 부드럽게 만들어보자!

        return () => clearTimeout(timer);

    }, [cartItems]);


    return (
        <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
            <span>My Cart</span>
            <span className={badge}>{numberOfCart}</span>
        </button>
    );
};

export default HeaderCartButton;

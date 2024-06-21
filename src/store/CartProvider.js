import React from 'react';
import CartContext from "./cart-context";

const CartProvider = ({children}) => {

    const defaultState = {
        items: [] //장바구니 배열
    };

    //reducer : 여러가지 복잡한 상태관리 단순화 및 중앙집중화
    //리듀서 함수 정의
    //state: 업데이트 이전의 상태값
    //action : 어떤 업데이트를 하는 지 정보와 업데이트에 필요한 값을 가진 객체
    const certReducer = (state, action) => {
        if (action.type === 'ADD') { //장바구니 추가
            //상태 업데이트 코드
            return null;//새로운 상태
        } else if (action.type === 'REMOVE') { //장바구니 제거

            return null;//새로운 상태
        }
        return defaultState;//새로운 상태
    };

    //provider가 실제로 관리할 상태들의 구체적인 내용들
    const cartContext = {
        cartItems: [],
        addItem: item => {},
        removeItem: id => {},
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
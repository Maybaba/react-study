import React, { useReducer, useState } from 'react';
import CartContext from './cart-context';

//중앙 관리 상태값 (state)
const defaultState = {
    items: [], // 장바구니 배열
    totalPrice: 0, //총액 상태값
};

// reducer: 여러가지 복잡한 상태관리를 단순화시키며 중앙집중화한다.
// 리듀서 함수 정의
// state: 업데이트 이전의 상태값
// action: 어떤 업데이트를 하는지 정보와 업데이트에 필요한 값을 가진 객체
const cartReducer = (state, action) => {

    console.log(' action: ', action);
    console.log(' 업데이트 이전 상태 state: ', state);

    if (action.type === 'ADD') { // 장바구니 추가

        // 상태 업데이트 코드

        //장바구니에 추가될 신규 아이템
        const newCartItem = action.value;

        //기존에 등록된 메뉴인지 확인해보기 위해 해당 아이템의 인덱스를 탐색 : 기존의 배열 state item 배열에 접근해서 인덱스를 찾고, 그 값에 더해준다.
        const index = state.items.findIndex(item => item.id === newCartItem.id);

        //기존에 존재하는 아이템배열 사본
        const existingItems = [...state.items];

        //신규 아이템인 경우
        let updateItems;
        if(index === -1) {
            updateItems = [...existingItems, newCartItem];
        } else { //이미 장바구니에 있었던 상품의 추가 : 수량만 업데이트
            existingItems[index].amount += newCartItem.amount;
            updateItems = [...existingItems]; //사본
        }

        //기존에 장바구니에 없는 새로운 상품이 장바구니에 추가된 경우
        const updateCartItems = [...state.items,action.value];

        //이미 장바구니에 있었던 상품의 추가

        //총액 상태 업데이트 : state 값으로 이전의 장바구니 총액 구한다.
        const updatePrice = state.totalPrice + (action.value.price * action.value.amount);

        return {
            items : updateItems,
            totalPrice: updatePrice
        };//새로운 상태

    } else if (action.type === 'REMOVE') { // 장바구니 제거

        // 기존 장바구니 배열 사본
        const existingItems = [...state.items];
        // 제거or 수량감소 대상의 인덱스 탐색
        const index = existingItems.findIndex(item => item.id === action.value);

        let updatedItems;
        // 기존에 장바구니의 해당 아이템의 수량이 1인경우 - 장바구니배열에서 제거
        if (index !== -1 && existingItems[index].amount === 1) {
            updatedItems = existingItems.filter(item => item.id !== action.value);
        } else { // 1보다 큰 경우 - 수량을 1개 내려줌
            existingItems[index].amount--;
            updatedItems = [...existingItems];
        }

        // 총액 계산
        const updatedPrice = state.totalPrice - existingItems[index].price;

        return {
            items: updatedItems,
            totalPrice: updatedPrice,
        }; // 새로운 상태
    }
    return defaultState; // 새로운 상태
};

const CartProvider = ({ children }) => {

    // 리듀서를 사용하여 상태 데이터를 업데이트
    // param1: 리듀서 함수
    // param2: 초기 상태값
    // return1: 상태객체를 사용할 수 있는 변수
    // return2: 상태업데이트를 위한 액션을 취하는 함수
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

    const addItemHandler = item => {
        // console.log('장바구니에 데이터 추가! - ', item);

        // 액션함수는 지금 어떤 상태를 업데이트할지에 대한 액션이름과 값을 객체로 전달
        // 이 객체는 reducer함수의 2번째 파라미터인 action에 전달됨!
        dispatchCartAction({
            type: 'ADD',
            value: item
        });
    };

    const removeItemHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            value: id
        });
    };

    // Provider가 실제로 관리할 상태들의 구체적인 내용들
    const cartContext = {
        cartItems: cartState.items, // 상태값
        totalPrice: cartState.totalPrice, // 총액 상태값
        addItem: addItemHandler, // 상태를 업데이트하는 함수
        removeItem: removeItemHandler, // 상태를 업데이트하는 함수
    };

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;


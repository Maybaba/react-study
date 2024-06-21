import React from 'react';
import styles from './Header.module.scss';

//정적 이미지 로딩하기
import foodImage from "../../../assets/img/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
const Header = ({onShowCart}) => {
    console.log('styles : ', styles);

    const {header, 'main-image':mainImage} = styles;

    return (
        <>
        <header className={header}>
            <h1> ReactMeals </h1>
            <HeaderCartButton onShow={onShowCart}/>
        </header>
            <div className={mainImage}>
                <img src={foodImage} alt=""/>
            </div>
        </>
    );
};

export default Header;
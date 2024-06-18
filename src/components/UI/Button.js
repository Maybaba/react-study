import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, onClick, className, disabled,children}) => {
    return (
        <button type={type || 'button'}  //타입이 혹시 안들어오면 버튼 타입을 쓰겠다!
                className={`${styles.button}  ${className}`}  //기본스타일과 클래스 스타일 속성 부여
                onClick={onClick}
                disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

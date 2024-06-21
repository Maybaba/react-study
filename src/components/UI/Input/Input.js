import React from 'react';
import styles from './Input.module.scss'

//넣을 props를 묶어서 보내애이이잉 : inputAttr 객체로
const Input = ({ label, inputAttr }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={inputAttr.id}>  </label>
            <input {...inputAttr}/>
        </div>
    );
};

export default Input;
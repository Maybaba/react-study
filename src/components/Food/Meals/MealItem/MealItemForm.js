import React, { useRef, useState } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.scss';

const MealItemForm = ({ id , onAddToCart }) => {
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            // Add validation error handling if necessary
            return;
        }

        onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                inputAttr={{
                    id: 'amount_' + id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button type="submit">+ Add</button>
        </form>
    );
};

export default MealItemForm;
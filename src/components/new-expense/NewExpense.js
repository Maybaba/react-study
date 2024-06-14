import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = ({ onSave }) => {

    const newExpenseContent =   <ExpenseForm onAdd={onSave} />

    const noContent = <button>새로운 지출 추가하기</button>;

    return (
        <div className="new-expense">
            {noContent}
        </div>
    );
};

export default NewExpense;

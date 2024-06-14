import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = ({ onSave }) => {

    const [toggle, setToggle] = useState(false);

    const startInsertModeHamdler = () => setToggle(true);
    const stopInsertModeHamdler = () => setToggle(false);

    let newExpenseContent = <button onClick={startInsertModeHamdler}>새로운 지출 추가하기</button>;

    if(toggle) newExpenseContent = <ExpenseForm onAdd={onSave} onCancel={stopInsertModeHamdler}/>

    return (
        <div className="new-expense">
            {newExpenseContent}
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;

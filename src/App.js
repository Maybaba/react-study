import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/expenses/ExpenseList';
import NewExpense from './components/new-expense/NewExpense';

const App = () => {

    // 서버에서 지출항목 JSON 배열을 응답받음
    const expenses = [
        {
            title: '전공책',
            price: 10000,
            date: new Date(2024, 2-1, 3) // 1월이 0으로 되어있고 2월이 1이 되어있음
        },
        {
            title: '손금책',
            price: 2000,
            date: new Date(2023, 7-1, 7)
        },
        {
            title: '아이스크림케이크',
            price: 44000,
            date: new Date(2021, 2-1, 29)
        },
        {
            title: '그릭요거트',
            price: 3000,
            date: new Date(2022, 13-1, 11)
        },
    ];

    // 배열을 상태변수로 관리
    const [expenseList, setExpenseList] = useState(expenses);


    // ExpenseForm에게 내려보낼 함수
    const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);

    return (
        <>
            <NewExpense onSave={onAddExpense} />
            <ExpenseList expenses={expenseList} />
        </>
    );
};

export default App;

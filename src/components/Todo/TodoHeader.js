import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({todoList}) => {
    //현재 날짜
    const today = new Date();

    //년 월 일 포맷
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const weekday = `${weekdays[today.getDay() -1]}`;

    return (
        <header>
            <h1>{formattedDate}</h1>
            <div className='day'>{weekday}</div>
            <div className='tasks-left'>할 일 {}개 남음</div>
        </header>
    );
};

export default TodoHeader;
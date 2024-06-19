import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = ({todoList, onDel}) => {
    console.log('todoMain: ',todoList);

    return (
        //배열을 순회해서 i번째의 아이디와 텍스트를 렌더링
        <ul className='todo-list'>
            {todoList.map(todo => (
                <TodoItem key={todo.id} context={todo.text} onDel={onDel}/>
            ))}
        </ul>
    );
};

export default TodoMain;
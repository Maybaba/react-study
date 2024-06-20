import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";



const TodoMain = ({ todos, onRemove, onCheck }) => {



    return (
        //배열을 순회해서 i번째의 아이디와 텍스트를 렌더링
        <ul className='todo-list'>
            {
                todos.map(todo => <
                    TodoItem key={todo.id}
                             item={todo}
                             onRemove={onRemove}
                             onCheck={onCheck}
                />)
            }
        </ul>
    );
};

export default TodoMain;
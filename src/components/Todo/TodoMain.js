import React from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const DUMMY_TODOS = [
    {id:1, title: '리액트 공부', done:true},
    {id:2,title: '프로젝트 하기', done:false},
    {id:3,title: '숙제하기', done:false}
]

const TodoMain = () => {

    return (
        //배열을 순회해서 i번째의 아이디와 텍스트를 렌더링
        <ul className='todo-list'>
            {
                DUMMY_TODOS.map(todo => <TodoItem key={todo.id} item={todo} />)
            }

            {/*{todoList.map(todo => (*/}
            {/*    <TodoItem key={todo.id} context={todo.text} onDel={onDel}/>*/}
            {/*))}*/}
        </ul>
    );
};

export default TodoMain;
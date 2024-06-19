import React from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";


const TodoTemplate = ({addTodo, todoList, onDel}) => {
    return (
        <div className='TodoTemplate'>
            <TodoHeader todoList={todoList} />
            <TodoMain todoList={todoList} onDel={onDel}/>
            <TodoInput addTodo={addTodo} />
        </div>
    );
};

export default TodoTemplate;
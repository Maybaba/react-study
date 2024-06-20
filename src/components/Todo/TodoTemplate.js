import React, {useState} from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";
import todoItem from "./TodoItem";
import todoInput from "./TodoInput";

const DUMMY_TODOS = [
    {id:1, title: '리액트 공부', done:true},
    {id:2,title: '프로젝트 하기', done:false},
    {id:3,title: '숙제하기', done:false}
];

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(DUMMY_TODOS);

    const makeNewId = () => {
        if (todoList.length === 0) return 1;
        return todoList[todoList.length - 1].id + 1;
    };

    //데이터 상향식 전달을 위한 함수 생성 (todoinput에서 할 일을 끌어올리는 역할)
    const addTodo = (newTitle) => {
        const newTodo = {
            id: makeNewId(),
            title: newTitle,
            done: false
        };
        console.log('new : ', newTodo);
        //주소값이 다른 객체를 복사한다.
        //이전 상태를 참조하여 교체해주어야 한다. prev와 같은 예시이다.
        setTodoList(prevTodoList => [...prevTodoList, newTodo])
    };

    return (
        <div className='TodoTemplate'>
            <TodoHeader/>
            <TodoMain todos = {todoList}/>
            <TodoInput onAdd={addTodo} />
        </div>
    );
};



export default TodoTemplate;
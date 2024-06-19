import React, {useState} from 'react';
import './App.css'

//bootstrap 경로
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoTemplate from './components/Todo/TodoTemplate';


const App = () => {

    //입력받은 값 추가 상태 관리
    const [todoList, setTodoList] = useState([]);

    //입력받은 text 값 추가하기
    const addTodo = (text) => {
        const nextTodoList = todoList.concat({
            id: todoList.length,
            text,
            checked: false,
        });
        setTodoList(nextTodoList);
        console.log('nextTodoList:',nextTodoList);
    };

    // //리스트 삭제하기
    const onDelete = (id) => {
        setTodoList(todoList.filter(todoItem =>
            todoItem.id !== id
        ));
    };


    return (
      <TodoTemplate addTodo={addTodo} todoList={todoList} onDel={onDelete} />
    );
};

export default App;
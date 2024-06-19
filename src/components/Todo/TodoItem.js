import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({ context , onDel, key}) => {
    console.log(context);



    return (
        <li className='todo-list-item'>
            <div className='check-circle'>
                <MdDone/>
            </div>
            <span className='text'>{context}</span>
            <div
                className='remove'
                onClick={() => onDel(key)} // onDel 함수를 호출하도록 수정
                >
                <MdDelete/>
            </div>
        </li>
    );
};

export default TodoItem;
import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({ context }) => {
    console.log(context);


    return (
        <li className='todo-list-item'>
            <div className='check-circle'>
                <MdDone/>
            </div>
            <span className='text'>{context}</span>
            <div className='remove'>
                <MdDelete/>
            </div>
        </li>
    );
};

export default TodoItem;
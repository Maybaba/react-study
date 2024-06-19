import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({addTodo}) => {


    //입력받은 상태값 관리하기
    const [text, setText] = useState('');


    //입력한 현재 값이 set 되도록 설정하기
    const onChangeInput = e => {
        setText(e.target.value);
        console.log(text);
    }


    //insert를 누르면 입력받은 값 전달받기 ㅋ
    const onSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText(''); // 입력값 초기화
        };
    };

    return (
        <>
            <div className='form-wrapper'>
                <form className='insert-form' >
                    <input
                        onChange={onChangeInput}
                        className='inputText'
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                        value={text}
                    />
                </form>
            </div>
            <button className='insert-btn' type='submit' onClick={onSubmit}>
                <MdAdd/>
            </button>
        </>
    );
};

export default TodoInput;
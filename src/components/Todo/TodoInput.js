import React, {useRef, useState} from 'react';
import { MdAdd } from 'react-icons/md';

import './scss/TodoInput.scss';

const TodoInput = ({onAdd}) => {
    //input의 주소값을 기억하는 변수 생성
    const $textInput = useRef();

    // 입력창 토글링 상태값
    const [open, setOpen] = useState(false);

    // 버튼 토글링 함수 : 이전 상태값 가져와서 그 값에 의해 값 바꾸기 !
    const onToggle = () => setOpen(prevOpen => !prevOpen);

    //submit handler 함수
    const submitHandler = e=> {
        e.preventDefault();
        //제출되면 값 비우기
        onAdd($textInput.current.value);
        $textInput.current.value = '';
        setOpen(false);
    }

    return (
        <>
            {open && (
                <div className="form-wrapper">
                    <form className="insert-form" onSubmit={submitHandler}>
                        <input
                            ref={$textInput}
                            type="text"
                            placeholder="할 일을 입력 후, 엔터를 누르세요!"
                        />
                    </form>
                </div>
            )}

            <button
                className={`insert-btn ${open ? 'open' : undefined}`}
                onClick={onToggle}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;

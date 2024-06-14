import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../UI/Button.js';

const CourseInput = ({onAdd}) => {

    // 지출 값을 상태값으로 관리하기
    const [enteredText, setEnteredText] = useState('');


    //클릭하면 받은 값 가지고있기
    const formSubmitHandler = e => {
        e.preventDefault();
        const newGoalObject = {
            id:Math.random().toString(),
            text: enteredText
        };

        onAdd(newGoalObject);

        setEnteredText('');
    };


    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>나의 목표</label>
                <input type="text" onChange={e => setEnteredText(e.target.value)} value={enteredText}/>
            </div>
            <Button type="submit" >목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;

    //     // App.js에게 받은 함수를 호출
    //     onAdd({
    //         ...userInput,
    //         date: new Date(userInput.date)
    //     });
    //
    //     // form input 비우기
    //     setUserInput({
    //         title: '',
    //         price: '',
    //         date: ''
    //     });


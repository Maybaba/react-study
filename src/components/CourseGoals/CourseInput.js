import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../UI/Button.js';

const CourseInput = ({onAdd}) => {

    // 목표 인풋에 입력한 값
    const [enteredText, setEnteredText] = useState('');

    //입력값 검증을 통과했는지 여부 상태관리
    const [isValid, setIsValid] = useState(true);

    //클릭하면 받은 값 가지고있기
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(enteredText.trim().length === 0) {
            setIsValid(false);

            return;
        }

        const newGoalObject = {
            id:Math.random().toString(),
            text: enteredText
        };

        onAdd(newGoalObject);

        setEnteredText('');
    };

    const goalChangeHandler = (e) => {

        const inputValue = e.target.value;

        //입력값 검증 : 한글자 이상만 입력할 수 있게끔 하기.
        if(inputValue.trim().length > 0) {

            //상태값의 기준을 만들어서 그 값에 의해 통과시키기 : 0보다 클 때
            setIsValid(true);

        }

        setEnteredText(e.target.value);
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${isValid ? '' : 'invalid'}`}>
                <label>나의 목표</label>
                <input type="text"
                       onChange={goalChangeHandler}
                       value={enteredText}
                //        style={{
                //            backgroundColor: isValid ? 'transparent' : 'salmon',
                //            borderColor:isValid ? 'blue': 'red',
                // }}
                />
            </div>
            <Button type="submit" >목표 추가</Button>
        </form>
    );
};

export default CourseInput;



import React, { useState } from 'react';

const Counter = () => {
    // const [num, setNum] = useState(num);
    //
    // let num = 0;
    // const clickHandler = e => {
    //     if e.target //e.target 이 inc 버튼일 경우 +1
    //     setNum(num++);
    //     //dec일경우 -1
    //     setNum(num--);
    // };

    let [num, setNum] = useState(0);

    const increaseHandler = e => {
        //useState의 setter는 상태값을 업데이트 할 때
        //이전 상태값을 참조함

        //해결방법 ㅣ 함수형 업데이트를 사용
        setNum((prev) => {
            console.log('변경이전값 : ', prev);
            //변경 이후값을 반환
            return prev + 1;
        });
        //함수형 업데이트를 사용함
        setNum(num => num + 1);

        // 상태값의 변경은 실시가능로 일어나지 않음
        // 해결방법 : useEffect 훅으로 해결한다. . . (뒤에 배움)
        console.log('변경이후값 :', num);

    // const clickHandler = (e) => {
    //     if (e.target.id === 'inc') { //증가 버튼일 경우
    //         console.log(e.target.id);
    //         setNum(num + 1);
        // } else if (e.target.id === 'dec') { //감소 버튼일 경우
        //     console.log(e.target.id);
        //     setNum(num - 1);
        // }
    };

    return (
        <div>
            <h1>숫자 : </h1>
            <h2> {num} </h2>
            <button id='inc' onClick={increaseHandler}>증가</button>
            <button id='dec' onClick={ e => {setNum(num -1)}}>감소</button>
        </div>
    );
};

export default Counter;
import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

//기본 더미 데이터
const DUMMY_DATA = [
    {
        id:'g1',
        text: '리액트 컴포넌트 스타일링 마스터 하기'
    },
    {
        id:'g2',
        text: 'UI 설계 고수 되 기'
    },
    {
        id:'g3',
        text: '그냥 만들고 싶은걸 자유롭게 만들고 싶다. . . '
    },
]

const App = () => {

    const [goals, setGoals] = useState(DUMMY_DATA);

    //상향식 데이터 전달 couerseInput에게 전달할 함수
    const addGoalHandler = (goalObject) => {
        setGoals([...goals, goalObject]);
    };

    //courseList -> courseItem에게 전달할 함수
    const deleteGoalHandler = (id) => {
        console.log('id :', id);

        //필터는 새 배열을 주기 때문에 복사할 코드를 쓰지 아도 깔끔하게 처리할 수 이따 !
        setGoals(goals.filter(g => g.id !== id));
    };

    return (
        <div>
            <section id="goal-form">
                <CourseInput onAdd={addGoalHandler} />
            </section>
            <section id="goals">
                <CourseList items={goals} onDelete={deleteGoalHandler} />
            </section>
        </div>
    );
};

export default App;


// let index = -1;
// for(let i =0; i < goals.length; i++) {
//     if(goals[i].id === id) {
//         index = i;
//         break;
//     }
// }

// console.log('index', index);
//아래와 같이 3가지 방법이 있다.
// goals.splice(index, 1);
// goals.splice(goals.findIndex(g=>g.id ===id),1);






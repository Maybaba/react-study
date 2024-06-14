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

        let index = -1;
        for(let i =0; i < goals.length; i++) {
            if(goals[i].id === id) {
                index = i;
                break;
            }
        }
        console.log('index', index);
        //아래와 같이 3가지 방법이 있다.
        // goals.splice(index, 1);
        // goals.splice(goals.findIndex(g=>g.id ===id),1);

        //필터는 새 배열을 주기 때문에 복사할 코드를 쓰지 아도 깔끔하게 처리할 수 이따 !
        setGoals(goals.filter(g=>g.id!=id));

        setGoals([...goals]);
    }

    return (
        <div>
            <section id="goal-form">
                <CourseInput onAdd={addGoalHandler} />
            </section>
            <section id="goals">
                <CourseList items={goals} onDelete={{deleteGoalHandler}} />
            </section>
        </div>
    );
};

export default App;



// import React, { useState } from 'react';
// import './App.css';
// import ExpenseList from './components/expenses/ExpenseList';
// import NewExpense from './components/new-expense/NewExpense';
//
// const App = () => {
//
//     // 서버에서 지출항목 JSON 배열을 응답받음
//     const expenses = [
//         {
//             title: '전공책',
//             price: 10000,
//             date: new Date(2024, 2-1, 3) // 1월이 0으로 되어있고 2월이 1이 되어있음
//         },
//         {
//             title: '손금책',
//             price: 2000,
//             date: new Date(2023, 7-1, 7)
//         },
//         {
//             title: '아이스크림케이크',
//             price: 44000,
//             date: new Date(2021, 2-1, 29)
//         },
//         {
//             title: '그릭요거트',
//             price: 3000,
//             date: new Date(2022, 13-1, 11)
//         },
//     ];
//
//     // 배열을 상태변수로 관리
//     const [expenseList, setExpenseList] = useState(expenses);
//
//
//     // ExpenseForm에게 내려보낼 함수
//     const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
//
//     return (
//         <>
//             <NewExpense onSave={onAddExpense} />
//             <ExpenseList expenses={expenseList} />
//         </>
//     );
// };
//
// export default App;



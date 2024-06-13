
import React from 'react';
import './App.css';
import NewExpense from './components/new-expense/NewExpense.js';
import ExpenseList from './components/expenses/ExpenseList.js';

const App = () => {

    // 서버에서 지출항목 JSON 배열을 응답받음
    const expenses = [
        {
            title: '책 구매',
            price: 30000,
            date: new Date(2024, 6-1, 3) // 1월이 0으로 되어있고 2월이 1이 되어있음
        },
        {
            title: '족발먹음',
            price: 40000,
            date: new Date(2024, 6-1, 7)
        },
        {
            title: '헬스장등록',
            price: 300000,
            date: new Date(2024, 6-1, 12)
        },
    ];

    return (
        <>
        <NewExpense />
        <ExpenseList expenses={expenses}/>

        </>
    );
};

export default App;

// function App() {

    //jsx 문법
    // const $h2 = React.createElement('h2', null, '방가방가방가방가방가방가');
    // const $h2 = <h2>방가방가</h2>;

    //jsx 규칙
    //1. return 안에 있는 태그는 반드시 하나의 태그로 묶여야 함 : 의미없는 부모 div 클래스를 만드는 대신 5번을 한다.
    //2. 빈 태그 (닫는 태그가 없는) 는 반드시 />로 마감
    //3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    //4. js의 for 문으로 인식해서 label은 꼭 htmlFor로 작성해야 한다.
    //5. 의미없는 부모는 <React.Fragment> 로 감싼다. 여기서 더 축약해서 <> 다이아몬드로 표기 가능하다.
    //6. 변수 값이나 함수를 출력할 때는 {}로 감싸면 된다.
//     const hello = "하이";
//   return (
//       <>
//           <Hello />
//           <Bye />
//           <Hello />
//           <Hello />
//           <Hello />
//           </>
//
//   );
// }
//
// export default App;

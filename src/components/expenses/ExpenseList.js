import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpenseFilter.js'

const ExpenseList = ({ expenses }) => {

  //선택된 연도로 재 렌더링 하기 위해 연도를 상태값으로 관리
  const [filteredYear, setFilteredYear] 
  = useState(new Date().getFullYear()) ;

  const onFilterChange = (v) => {
  //ExpenseFilter에 있는 선택된 연도값을 여기서 출력하기
  console.log('선택된 년도 출력 :', v);
  setFilteredYear(filteredYear);
}

//app에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수 만들기
// const convertToComponentArray = () => {

//   return expenses
//   .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);

  // const newArray = [];
  // for (const ex of expenses) {
  //   const tag = <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />;
  //   newArray.push(tag);
  // }
  // return newArray;
// }

return (
  <div className="expenses">
    <ExpenseFilter onChangeFilter={onFilterChange} />

    {expenses
      .filter(ex => ex.date.getFullYear().toString() === filteredYear)
      .map(({title, price, date}) => (
      <ExpenseItem
      //키를 보통은 PK 로 넣는다. 
         key={Math.random().toString}// 아이디 같은 키 값을 부여한다. 실제 태그에는 그려지지 않는다. 여러개의 ex 아이템을 구분하기 위한 용도로 사용.
        title={ex.title}
        price={ex.price}
        date={ex.date}
      />
    ))}
  </div>
);
};

export default ExpenseList;

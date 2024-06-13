import React from 'react'
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpenseFilter.js'

const ExpenseList = ({ expenses }) => {

const onFilterChange = (v) => {
  //ExpenseFilter에 있는 선택된 연도값을 여기서 출력하기
  console.log('선택된 년도 출력 :', v);
}

  return (
    <div className='expenses'>

      <ExpenseFilter onFilterChange={onFilterChange} />

            <ExpenseItem
                title={expenses[0].title}
                price={expenses[0].price}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                price={expenses[1].price}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                price={expenses[2].price}
                date={expenses[2].date}
            />
    </div>
  )
}

export default ExpenseList
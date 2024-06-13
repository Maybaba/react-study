import React, {useState} from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ onFilterChange }) => {

 const handleChange = e => {
  let v = e.target.value;
  console.log(v);
  // setSelectedYear(v);
  onFilterChange(v); //읽어낸 정보를 집어넣어준다
};

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleChange}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter
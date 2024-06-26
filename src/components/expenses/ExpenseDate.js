import React, { useState } from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ exDate: date }) => {

  // console.log('bbb: ', bbb.exDate);
  const month = date.toLocaleString('en-US', {month: 'long'});

  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.getFullYear()}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__day">{date.getDate()}</div>
    </div>
  );
};

export default ExpenseDate;
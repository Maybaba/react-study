import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ date, title, price: exPrice }) => {

    // let itemTitle = title;
    //use state는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
    /**
     * 훅의 리턴값은 배열이며
     *
     * @type {[unknown : 관리할 상태의 초기값,function(): void] : 해당 상태값을 변경할 때 사용하는 setter 함수}
     * 아래는 title을 상태값으로 관리할 수 있게 된다. . .
     * [상태값, 상태값 변경 함수] 이렇게 디스트럭쳐링을 진행해서 코드를 개선할 수 있다.
     */
    const [itemTitle, setItemTitle] = useState(title);
    // console.log('abc :',abc);

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

  // 이벤트 핸들러 선언
  const clickHandler = e => {
      /**
       * useState가 관리하는 상태값은 반드시 setter로만 변경해야 한다.
       */
      setItemTitle('짜파게티');

      // const setTitle = abc[1];
      // abc[0] = '헤헤';
      // setTitle('헤헤123');

    // console.log('title : ', title);
    // console.log('itemtitle : ', itemTitle);
    // itemTitle = '하하하하호호호호';

    // console.log(e.target.previousElementSibling.firstElementChild.textContent);
    
    // const $price = document.querySelectorAll('.expense-item__price');
    // console.log($price);
  };

    console.log('렌더링 전');
  return (
      <Card className='expense-item'>
        <ExpenseDate exDate={date} />
        <div className='expense-item__description'>
          <h2>{itemTitle}</h2>
          <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
        <button id='btn' onClick={clickHandler}>제목수정</button>
      </Card>
  )
}

export default ExpenseItem;
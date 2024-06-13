import './CheckboxStyle.css'
import React, { useState } from 'react'

//아래 체크박스 설정해서 라벨 스타일이 바뀌게 하기

function CheckboxStyle() {

  //체크 상태를 관리
  const [isChecked, setIsChecked] = useState(false);

  const checkChangeHandler = e => {
    setIsChecked(!isChecked);
  };
// let [] = useState();

// const clickHandler = e => {


//   setStatus()
// }


return (
  <div className="checkbox-container">
    <input
      type="checkbox"
      id="styled-checkbox"
      checked={isChecked}
      onChange={checkChangeHandler}
    />
    <label
      htmlFor="styled-checkbox"
      className={isChecked ? 'checked' : 'unchecked'}
    >
      Check me!
    </label>
  </div>
);
}

export default CheckboxStyle


    
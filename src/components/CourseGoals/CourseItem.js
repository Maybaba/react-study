import React from 'react';
import './CourseItem.css'

const CourseItem = ({ item, onDelete }) => {

    const deleteHandler = e => {
        //특정 아이디를 삭제하기 app.js 에게 삭제 대상의 아이디를 전달
        console.log(item.id);

        console.log('삭제삭제버튼버튼');

    }

    return <li className="goal-item" onClick={deleteHandler}>{item.text}</li>;
};

export default CourseItem;

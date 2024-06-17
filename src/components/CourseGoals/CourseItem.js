import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({ item, onDelete }) => {

    const deleteHandler = e => {
        //특정 아이디를 삭제하기
        console.log(item.id);

        console.log('삭제삭제버튼버튼');
        //app.js 에게 삭제할 대상의 id 전달하기
        onDelete(item.id);

    };

    return <li className={styles['goal-item']} onClick={deleteHandler}>{item.text}</li>;
};

export default CourseItem;

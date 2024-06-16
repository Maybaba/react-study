import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({ items, onDelete }) => {
    return (
        <ul className='goal-list'>
            {
                items.map(item => <CourseItem onDelete={onDelete} key={item.id} item={item} />)
            }
        </ul>
    );
};

export default CourseList;
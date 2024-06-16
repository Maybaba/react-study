import React from 'react';
import './CourseList.css';
import { ListGroup, Button } from 'react-bootstrap';

const CourseList = (props) => {
    return (
        <ListGroup>
            {props.items.map((goal) => (
                <ListGroup.Item key={goal.id}>
                    {goal.text} (Due: {new Date(goal.dueDate).toLocaleDateString()})
                    <Button variant="danger" onClick={() => props.onDelete(goal.id)} className="float-right">
                        Delete
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default CourseList;

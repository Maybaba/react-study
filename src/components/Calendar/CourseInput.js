import React, { useState } from 'react';
import './CourseInput.css';
import { Form, Button } from 'react-bootstrap';

const CourseInput = (props) => {
    const [enteredText, setEnteredText] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText,
            dueDate: enteredDate ? new Date(enteredDate) : new Date(),
        };
        props.onAdd(newGoal);
        setEnteredText('');
        setEnteredDate('');
    };

    return (
        <Form onSubmit={addGoalHandler}>
            <Form.Group controlId="formGoalText">
                <Form.Label>Goal</Form.Label>
                <Form.Control
                    type="text"
                    value={enteredText}
                    onChange={(event) => setEnteredText(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formGoalDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    value={enteredDate}
                    onChange={(event) => setEnteredDate(event.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Goal
            </Button>
        </Form>
    );
};


export default CourseInput;

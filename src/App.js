import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import CalendarComponent from './components/Calendar/CalendarComponent.js';
import EventModal from "./components/Calendar/EventModal";
import './App.css';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

const DUMMY_DATA = [
    { id: 'g1', text: '리액트 컴포넌트 스타일링 마스터 하기', dueDate: new Date() },
    { id: 'g2', text: 'UI 설계 고수 되 기', dueDate: new Date(new Date().setDate(new Date().getDate() + 1)) },
    { id: 'g3', text: '그냥 만들고 싶은걸 자유롭게 만들고 싶다.', dueDate: new Date(new Date().setDate(new Date().getDate() + 2)) },
];

const App = () => {
    const [goals, setGoals] = useState(DUMMY_DATA);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const addGoalHandler = (goalObject) => {
        setGoals([...goals, goalObject]);
    };

    const deleteGoalHandler = (id) => {
        setGoals(goals.filter((g) => g.id !== id));
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleModalClose = () => {
        setSelectedEvent(null);
    };

    const handleSaveEvent = (updatedEvent) => {
        setGoals(goals.map(goal => goal.id === updatedEvent.id ? updatedEvent : goal));
        handleModalClose();
    };

    const handleDeleteEvent = (eventToDelete) => {
        deleteGoalHandler(eventToDelete.id);
        handleModalClose();
    };

    const events = goals.map((goal) => ({
        ...goal,
        title: goal.text,
        start: new Date(goal.dueDate),
        end: new Date(goal.dueDate),
        allDay: true,
    }));

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <section id="goal-form">
                        <CourseInput onAdd={addGoalHandler} />
                    </section>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <section id="goals">
                        <CourseList items={goals} onDelete={deleteGoalHandler} />
                    </section>
                </Col>
                <Col md={6}>
                    <section id="calendar">
                        <CalendarComponent events={events} onEventClick={handleEventClick} />
                    </section>
                </Col>
            </Row>
            <EventModal
                isOpen={!!selectedEvent}
                onRequestClose={handleModalClose}
                event={selectedEvent}
                onSave={handleSaveEvent}
                onDelete={handleDeleteEvent}
            />
        </Container>
    );
};

export default App;
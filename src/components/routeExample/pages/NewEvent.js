import React from 'react'
import EventForm from '../components/EventForm';
import { redirect } from 'react-router-dom';
import context from 'react-bootstrap/esm/AccordionContext';

const NewEvent = () => {
  return <EventForm method='post' event={null} />;
}

export default NewEvent;





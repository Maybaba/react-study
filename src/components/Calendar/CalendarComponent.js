import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ events, onEventClick }) => {
    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={onEventClick}
            />
        </div>
    );
};

export default CalendarComponent;

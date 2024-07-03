import React from 'react';
import {useParams} from "react-router-dom";

const EventDetail = () => {

    const { eventId : id } = useParams(); //파라미터 읽어오기
    return (
        <>
        <h1>
            EventDetail Page
            <p>
                <p> EventId: {id}  </p>
            </p>
        </h1>
        </>
    );
};

export default EventDetail;
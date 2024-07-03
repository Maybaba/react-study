import React, { useEffect, useState } from 'react';
import {Link, useLoaderData} from "react-router-dom"; //라우터 돔에서 링크 컴포넌트 가지고 오기
import EventList from '../components/EventList';
import EventsNavigation from '../layout/EventNavication';

const Events = () => {

    // loader가 리턴한 데이터 받아오기
    const eventList = useLoaderData();
    // console.log(eventList);

    return (
        <>
            <h1>Events Page</h1>
            <EventList eventList={eventList} />
        </>
    );
};

export default Events;
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"; //라우터 돔에서 링크 컴포넌트 가지고 오기
import EventList from '../components/EventList';
import EventsNavigation from '../layout/EventNavication';

const Events = () => { 

    //상태변수로 이벤트아이디를 반환해서 usestate 변수로 활용한다. 
    const[eventList, setEventList] = useState([]);

    //배열을 비워놓으면 최초 한번만 페치가 실행된다. 
    useEffect(() => {
         //렌더링 되기 전에 json을 요청한다. 
    fetch('http://localhost:8282/events')
    .then(res => res.json())
    .then(jsonData => {
        console.log(jsonData);
        setEventList(jsonData); 
    })
    }, []);

    return (
        <>
        <h1> Event Page </h1>
        {/* < EventsNavigation /> */}
        < EventList eventList={eventList} />
     
        </>
    );
};

export default Events;
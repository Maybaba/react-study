import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"; //라우터 돔에서 링크 컴포넌트 가지고 오기
import EventList from '../components/EventList';
import EventsNavigation from '../layout/EventNavication';

const Events = () => { 


    //loader가 리턴한 데이터 받아오기, 훅을 사용하자
    const aaa = useLoaderData();
    console.log(aaa);

    return (
        <>
        <h1> Event Page </h1>
    
        </>
    );
};

export default Events;
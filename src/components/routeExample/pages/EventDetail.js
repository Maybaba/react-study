import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventItem from '../components/EventItem';

const EventDetail = () => {

    const ev = useLoaderData();

    // const { eventId: id } = useParams();
    // const [ ev, setEv ] = useState({});
  
    // useEffect(() => {

    //     ( async () => {
    //         const response = await fetch(`http://localhost:8282/events/${id}`);
    //         const json = await response.json();
    //         console.log("json : ",json);
    //         setEv(json);
    //     })();

    // }, []);

    return <EventItem event={ev} />; 
};
  
  export default EventDetail;

  //use로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능
  export const loader = async ({ params }) => {

    const { eventId: id } = params;

    //loader에서는 리액트에서 반환하는 파라미터에서 직접 읽어온다. 
    // console.log('abc: ', abc.params.eventId);

    // const { eventId: id } = 

    const response = await fetch(`http://localhost:8282/events/${id}`);

    //...예외처리

    return await response.json();
    // console.log("json : ",json);

    // setEv(json); -> setter를 지정할 수 없음

  }
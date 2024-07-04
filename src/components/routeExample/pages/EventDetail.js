import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams, useRpoteLoaderData} from "react-router-dom";
import EventItem from '../components/EventItem';

const EventDetail = () => {

    //사용범위가 본인컴포와 그 하위 컴포 (children은 하위가 아님)
    // const ev = useLoaderData(); //자신의 loader를 불러옴

    const ev = useRpoteLoaderData('event-detail'); //부모의 loader를 불러오는 훅

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
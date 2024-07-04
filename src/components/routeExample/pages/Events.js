import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from "react-router-dom"; //라우터 돔에서 링크 컴포넌트 가지고 오기
import EventList from '../components/EventList';
import EventsNavigation from '../layout/EventNavication';


const Events = () => {

  // loader가 리턴한 데이터 받아오기
  const eventList = useLoaderData();
  console.log(eventList);

  return (
    <>
      <h1>Events Page</h1>
      <EventList eventList={eventList} />
    </>
  );
};

export default Events;

//페이지가 렌더링 되기 직전에 서버에 api 요청
// loader를 app.js로부터 아웃소싱
export const loader = async () => {

  const response = await fetch('http://localhost:8282/events?sort=date');
  
  if (!response.ok) {
    const errorText = await response.text(); // 서버가 내려주는 텍스트 
    throw new Response(
      JSON.stringify({ message: errorText }),
      {
        // 서버에서 내려주는 상태코드를 사용할 수 있음 
        status: response.status //옵션 개체로 status를 지정할 수 있음
      }
    );
  } 
  //loader에서만 가능
  return response; // ok일 경우 events[]
  //return await resoponse.json() -> 일반적인 js

  //리턴 데이터를 사용할 수 있는 범위 : 하위 컴포넌트 모두 사용 가능
  //useLoaderData hook으로 하위컴포넌트에서 가져올 수 있음
  //새로고침 없이 화면전환은 Link에서 할 수 있다. 
};
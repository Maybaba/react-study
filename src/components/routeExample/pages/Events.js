import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from "react-router-dom"; //라우터 돔에서 링크 컴포넌트 가지고 오기
import EventList from '../components/EventList';
import EventsNavigation from '../layout/EventNavication';
import EventSkeleton from '../components/EventSkeleton';

//npm install lodash
import { throttle, debounce } from 'lodash';

const Events = () => {

  // loader가 리턴한 데이터 받아오기
  // const eventList = useLoaderData();
  // console.log(eventList);


  // 서버에서 가져온 이벤트 목록
  const [events, setEvents] = useState([]);

  // 로딩 상태 체크
  const [loading, setLoading] = useState(false);

  // 현재 페이지 번호 
  const [currentPage, setCurrentPage] = useState(1);

  // 더이상 가져올 데이터가 있는지 확인
  const [isFinish, setIsFinish] = useEffect(false);

  // 서버로 목록 조회 요청보내기
  const loadEvents = async() => {

    if(isFinish) {
      console.log('loading return ! ');
      return;
    }

    console.log('start loading...');
    setLoading(true);

    const response = await fetch(`http://localhost:8282/events/page/${currentPage}?sort=date`);

    // 총 게시물 개수 가져오기 
    const {events:loadedEvents, totalCount} = await response.json();

    console.log('loadedEvents: ',loadedEvents);

    //기존에서 있는 배열에다가 추가로 불러서 뒤에 붙여줘야 함. 
    const updatedEvents = [...events, ...loadedEvents ];
    setEvents(updatedEvents);
    setLoading(false);
    console.log('end loading!!');
    //기존의 페이지 번호 1을 늘려놓는다.
    setCurrentPage(prevPage => prevPage {
          //로딩이 끝나면 더이상 가져올게 있는지 여부체크 
    setIsFinish(totalCount === updatedEvents.length);

    };



  };

  // 초기 이벤트 1페이지 목록 가져오기
  useEffect(() => {
    loadEvents();
  }, []);

  // 스크롤 핸들러

  const scrollHandler = throttle(() => {
    if (loading || 
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
    ) {
      return;
    }
    loadEvents();
  }, 2000);

  // 스크롤 이벤트 바인딩
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler.cancel(); // 스로틀 취소
    }
  }, [currentPage, loading]);

  return (
    <>
      <EventList eventList={events} />
      {loading && <EventSkeleton />}
    </>
  );
};

export default Events;

//페이지가 렌더링 되기 직전에 서버에 api 요청
// loader를 app.js로부터 아웃소싱
// export const loader = async () => {

//   const response = await fetch('http://localhost:8282/events?sort=date');
  
//   if (!response.ok) {
//     const errorText = await response.text(); // 서버가 내려주는 텍스트 
//     throw new Response(
//       JSON.stringify({ message: errorText }),
//       {
//         // 서버에서 내려주는 상태코드를 사용할 수 있음 
//         status: response.status //옵션 개체로 status를 지정할 수 있음
//       }
//     );
//   } 
//   //loader에서만 가능
//   return response; // ok일 경우 events[]
  //return await resoponse.json() -> 일반적인 js

  //리턴 데이터를 사용할 수 있는 범위 : 하위 컴포넌트 모두 사용 가능
  //useLoaderData hook으로 하위컴포넌트에서 가져올 수 있음
  //새로고침 없이 화면전환은 Link에서 할 수 있다. 

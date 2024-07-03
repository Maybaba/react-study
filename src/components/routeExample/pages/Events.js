import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"; //라우터 돔에서 링크 컴포넌트 가지고 오기

//웹사이트에서 더미 데이터 가져오기 - jsp에 데터 요청
// const DUMMY_EVENTS = [
//     {
//         id: '1',
//         title: '테일즈런너 여름방학 이벤트',
//         image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.zum.com%2Farticles%2F76306037&psig=AOvVaw2WiJrEi95Zd1wpf_0rJyPb&ust=1720053591968000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDHqozRiYcDFQAAAAAdAAAAABAE',
//         date: '2024-07-20',
//         description: '테일즈런너 여름맞이 이벤트'
//     },
//     {
//         id: '2',
//         title: '카트라이더 여름방학 이벤트',
//         image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bodnara.co.kr%2Fbbs%2Farticle.html%3Fnum%3D91286&psig=AOvVaw0TLXVEGEcicvYERLgcNhPf&ust=1720052279802000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiWzLDMiYcDFQAAAAAdAAAAABAE',
//         date: '2024-07-15',
//         description: '카트라이더  여름맞이 이벤트'
//     },
// ]

const Events = () => { 

// const fetchEvents = async () => {
//     const response = await fetch('http://localhost:8282/events');
//     const jsonDate =  const await response.json();
//     setEventList(jsonData);
// }

    //상태변수로 이벤트아이디를 반환해서 usestate 변수로 활용한다. 
    const[eventList, setEventList] = useState([]);

    //배열을 비워놓으면 최초 한번만 페치가 실행된다. 
    useEffect(() => {
         //렌더링 되기 전에 json을 요청한다. 
    fetch('http://localhost:8282/events')
    .then(res => res.json())
    .then(jsonData => {
        console.log(jsonData);
        setEventList(jsonData); //상태변수가 변경되면 자동으로 페치가 돌아가서 무한로딩이 된다. 
        //그래서 렌더링 되 기전 최초 한번반 페치를 한다. 
        //useEffect를 이용한다. 
    })
    }, []);

     //렌더링 되기 전에 json을 요청한다. 
    //  fetch('http://localhost:8282/events')
    //  .then(res => res.json())
    //  .then(jsonData => {
    //      console.log(jsonData);
    //      setEventList(jsonData); //상태변수가 변경되면 자동으로 페치가 돌아가서 무한로딩이 된다. 
    //      //그래서 렌더링 되 기전 최초 한번반 페치를 한다. 
    //      //useEffect를 이용한다. 
    //  })

    return (
        <>
        <h1>
            Events Page
        </h1>
        <ul>
            {
                eventList.map(event => (
                    <li key={event.id}>
                        <Link to={`${event.id}`}>{event.title}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    );
};

export default Events;
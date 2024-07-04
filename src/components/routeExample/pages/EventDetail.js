import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventItem from '../components/EventItem';

const EventDetail = () => {

    //라우터에서 주소에 붙은 값을 변환한다. 
    const { eventId: id } = useParams();
    const [ ev, setEv ] = useState({});
  
    // const data = useLoaderData();
    // console.log('loader data: ', data);

    //loader 말고 useEffect 가져오는 방법
    useEffect(() => {

        ( async () => {
            const response = await fetch(`http://localhost:8282/events/${id}`);

            //예외처리

            const json = await response.json();
            console.log("json : ",json);
            setEv(json);
        })();

    }, []);

    return <EventItem event={ev} />; 
};
  
    /*
    return   <div>
    {ev ? (
        <>
            <h1>EventDetail Page</h1>
            <p>{ev.title}</p>
            <p>{ev.desc}</p>
            <p>{ev['start-date']}</p>
        </>
    ) : (
        <p>Loading...</p>
    )}
</div>
  };
  */
 
  
  export default EventDetail;
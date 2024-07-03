import React from 'react';
import {Link} from "react-router-dom"; //라우터 돔에서 링크 컴포넌트 가지고 오기

//웹사이트에서 더미 데이터 가져오기
const DUMMY_EVENTS = [
    {
        id: '1',
        title: '테일즈런너 여름방학 이벤트',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meconomynews.com%2Fnews%2FarticleView.html%3Fidxno%3D55023&psig=AOvVaw3cG9BWSSXe7tuvJD6-JwrE&ust=1720052091023000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCB5cHLiYcDFQAAAAAdAAAAABAE',
        date: '2024-07-20',
        description: '테일즈런너 여름맞이 이벤트'
    },
    {
        id: '2',
        title: '카트라이더 여름방학 이벤트',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bodnara.co.kr%2Fbbs%2Farticle.html%3Fnum%3D91286&psig=AOvVaw0TLXVEGEcicvYERLgcNhPf&ust=1720052279802000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiWzLDMiYcDFQAAAAAdAAAAABAE',
        date: '2024-07-15',
        description: '카트라이더  여름맞이 이벤트'
    },
]

const Events = () => {
    return (
        <>
        <h1>
            Events Page
        </h1>
        <ul>
            {
                DUMMY_EVENTS.map(event => (
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
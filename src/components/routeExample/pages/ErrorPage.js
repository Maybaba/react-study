import React from 'react';
import MainNavigation from "../layout/MainNavigation";
import { useRouteError } from 'react-router-dom';
import EventsNavigation from '../layout/EventNavication';

const ErrorPage = () => {

    //에러가 발생했을 때 throw에 전달한 객체를 읽는 방법

    //Events.js에서 던지는 메시지를 읽을 수 있다. 
    const error = useRouteError();
    // console.log("error from Events:",error.data);
    let errorMessage; 
    errorMessage = JSON.parse(error.data).message;

    if (error.status == 400) {
        errorMessage = JSON.parse(error.data).message;
    }

    if (error.status == 404) {
        errorMessage = "페이지를 찾을 수 없습니다. URL을 확인하세요";
    }
    if (error.status == 500) {
        errorMessage = "서버가 불안정합니다. 몇 분 후 다시 접속해 주세요.";
    }


    return (
        <>
            <MainNavigation />
            <EventsNavigation />
        <main>
            <h1>페이지를 찾을 수 없습니다 ! </h1>
            <p> {errorMessage} </p>
            <img src="/src/assets/img/noghtErrorpage.png" alt="errorpage"/>
        </main>
        </>
    );
};

export default ErrorPage;
import React, {useRef, useState} from 'react';

const TimerChallenge = ({title, targetTime}) => {

    //timer를 ref 변수로 관리 " closure처럼 활용할 수 있음
    const timer = useRef();

    //타이머가 시작되엇는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = useState(false);

    //타겟 시간이 종료되었는지 여부
    const [timerExpired, setTimerExpired] = useState(false);

    const startHandler = e => {

        timer.current = setTimeout(e => {
            setTimerExpired(true);
            console.log('시간만료');
        }, targetTime*1000);

        setTimerStarted(true);
    }

    const stopHandler = e => {
        clearTimeout(timer.current);
        console.log('stop!!!!!');
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? stopHandler : startHandler}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
};

export default TimerChallenge;
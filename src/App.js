import React from 'react';
import Player from './components/Ref/Player'
import TimeChalenge from "./components/Ref/TimeChallenge";
const App = () => {
    return (
        <>
            <Player />
            <div id="challenges"></div>
            <TimeChalenge title='Easy' targetTime={15}/>
            <TimeChalenge title='not easy' targetTime={10}/>
            <TimeChalenge title='getting hard' targetTime={5} />
            <TimeChalenge title='pros only' targetTime={1} />
        </>
    );
};

export default App;
import React, {useRef, useState} from "react";

const Player = () => {

    //이름에 ref 걸어주기
    const $nameInputRef = useRef();

    const [enteredName, setEnteredName] = useState('anonymous');

    const nameChangeHandler = e => {
        console.log('click!');
        setEnteredName($nameInputRef.current.value);
        console.log(setEnteredName);
    }

    return (
        <section id="player">
            <h2>Welcome {enteredName}!</h2>
            <p>
                <input ref={$nameInputRef} type="text"/>
                <button onClick={nameChangeHandler}>Set Name</button>
            </p>
        </section>
    );
};

export default Player;

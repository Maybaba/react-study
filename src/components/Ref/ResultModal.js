import React, {useEffect, useRef} from 'react';

const ResultModal = ({result, targetTime}) => {

    const dialog = useRef();

    useEffect(() => {
        dialog.current.showModal(); //타이머 만료시 작동되어야 함
    }, []);

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>Your {result}!</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
};

export default ResultModal;
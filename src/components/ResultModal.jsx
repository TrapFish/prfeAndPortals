import React, {useImperativeHandle,useRef} from 'react';

const ResultModal = ({ref, targetTime, reremainingTime, onReset }) => {
    const dialog = useRef();

    const userLost = reremainingTime <= 0;

    const formattedRemainingTime = (reremainingTime/1000).toFixed(2);

    const score =  Math.round((1 - reremainingTime / (targetTime * 1000)) * 100);
    
    useImperativeHandle(ref, () =>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>You won. Your Score {score}</h2>}
            <p>The Target Time was  <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong> </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
};

export default ResultModal;
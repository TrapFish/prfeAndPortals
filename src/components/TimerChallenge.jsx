import React, { useState, useRef } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setRemainingTime] = useState(targetTime*1000);
    // const [timerStarted, setTimerStarted] = useState(false)
    // const [timerExpired, setTimerExpired] = useState(false);
    const timerIsActive = timeRemaining > 0 && timeRemaining <= targetTime*1000;

    const handleReset = () => {
        setRemainingTime(targetTime*1000);
    }
    
    if(timeRemaining <= 0){//here if condition is used to stop and will be ghard to meet so it is safe to use the below code as if timer is meet then it will fail the if condiotion and we will be safe
        clearInterval(timer.current);
      //  setRemainingTime(targetTime*1000);// this is dangerous because it will cause an infinite loop 
        dialog.current.open();
    }

    const handleStart  = () => {
        timer.current = setInterval(() => {
            setRemainingTime((prev) => {
                return prev - 10;
            })
            // setTimerExpired(true);
            // dialog.current.open();
        }, 10);
        //setTimerStarted(true);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
    <ResultModal ref={dialog} targetTime={targetTime} reremainingTime={timeRemaining} onReset={handleReset}/>
        <section className='challenge'>
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime}  second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? "Time is running ...." :  "Timer Inactive"}
            </p>
        </section>
        </>
    );
};

export default TimerChallenge;
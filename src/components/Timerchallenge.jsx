import { useState,useRef } from "react";
import Resultmodal from "./Resultmodal";

export default function Timerchallenge({ title, targettime }) {
   
    const timer=useRef();
    const dialog =useRef();
  

 const[Timeremain,setTimeremain] =useState(targettime * 1000);

 const TimerActive= (Timeremain  > 0 && Timeremain < targettime *1000);

 if(Timeremain <=0){
    clearInterval(timer.current);
    dialog.current.open();
 }
  
 function handleReset(){
  setTimeremain(targettime * 1000); 

 }

    function HandleTime(){
        timer.current = setInterval(() => {
            setTimeremain((prevtime) => prevtime -10);
        },10);
    }

    function HandleClear(){
    clearInterval(timer.current);
    dialog.current.open();
    }
  return (
    <>
     <Resultmodal ref={dialog} 
     targettime={targettime} 
     remainingtime={Timeremain}
     onreset={handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      
      <p className="challenge-time">
        {targettime} second{targettime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={ TimerActive ? HandleClear : HandleTime}>
            {TimerActive ?   "Stop " : "Start" } Challenge</button>
      </p>
      <p className={TimerActive ? 'active' :  undefined }>
         {TimerActive ?  'Time is running' : 'Timer inactive'}</p>
    </section>
    </>
  );
}

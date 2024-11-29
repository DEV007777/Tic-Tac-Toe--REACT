import { useState, useRef } from "react";
export default function Player() {
  const playername = useRef();
  const [playernaam, setplayernaam] = useState();

 
  function HandleClick() {
    setplayernaam(playername.current.value);
    playername.current.value='';
  }

  return (
    <div id="player">  
      <h2>Welcome { playernaam ?? "unknown entity"}</h2>
      <p>
        <input ref={playername}   type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
     
    </div>
  );
}

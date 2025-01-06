import React, {useState, useRef} from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName]= useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  const handleSubmit = () => {
    //setSubmitted(true);
    console.log(playerName.current.value) ;
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" 
          placeholder="Enter your name"
          value={enteredPlayerName}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState();
  const [dateSum, setDateSum] = useState(0);
  const [luckyNo, setLuckyNo] = useState();
  const [isLucky, setIsLucky] = useState();

  function handleSubmit(e) {

    e.preventDefault();
    var i;
    for (i = 0; i < dob.length; i++) {
      if (dob[i] == '-') {
      }
      else {
        setDateSum(dateSum + parseInt(dob[i]));
      }
    }
    if (dateSum % luckyNo == 0) {
      setIsLucky('Lucky');
    }
    else {
      setIsLucky('Not Lucky');
    }
  }

  return (
    <div>
      <h1> Is your birthday lucky? </h1>

      <label> Date of birth : </label>
      <input required onChange={(e) => setDob(e.target.value)} type="date" /> <br />
      <label>Lucky number</label>
      <input required onChange={(e) => setLuckyNo(e.target.value)} type="number" placeholder="Enter a lucky number" /><br />
      <button onClick={handleSubmit}> Submit </button>
      <div hidden={isLucky == undefined ? true : false}>
        {isLucky}
      </div>
    </div>
  );
}

export default App;

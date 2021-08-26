import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState();
  const [dateSum, setDateSum] = useState();
  const [luckyNo, setLuckyNo] = useState();
  const [isLucky, setIsLucky] = useState();
  function handleSubmit(e) {
    var sum = 0;
    console.log('dob = ', dob);
    console.log('luckyNo = ', luckyNo);
    var i;
    for (i = 0; i < dob.length; i++) {
      if (dob[i] == '-') {
      }
      else {
        sum = sum + parseInt(dob[i]);
        setDateSum(sum);
      }
    }
    if (sum % luckyNo == 0) {
      setIsLucky('Yes')
    }
    else {
      setIsLucky('No')
    }
    console.log('Lucky = ', isLucky);
  }

  return (
    <div>
      <h1> Is your birthday lucky? </h1>
      <form onSubmit={handleSubmit}>
        <label> Date of birth : </label>
        <input required onChange={(e) => setDob(e.target.value)} type="date" /> <br />
        <label>Lucky number</label>
        <input required onChange={(e) => setLuckyNo(e.target.value)} type="number" placeholder="Enter a lucky number" />
        <input type="submit" value="Check" />
      </form>
    </div>
  );
}

export default App;

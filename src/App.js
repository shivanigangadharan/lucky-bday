import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

const Heading = styled.h1`
font-size: 300%;
font-weight: light;
margin: 3% 0px 2% 0px;
`
const Main = styled.div`
font-family: 'Hina Mincho', serif;
`
const Form = styled.form`
padding: 2% 10% 3% 10%;
box-shadow: 1px 1px 10px 3px #273145;
width: 800px;
height: 350px;
font-size: 200%;
`
const Input = styled.input`
margin: 1%;
background: none;
color: ghostwhite;
border: none;
border-bottom: 2px solid grey;
padding: 2%;
font-size: 1.2rem;
outline: none;
`
const Button = styled.button`
background:none;
color: white;
border: 1px solid grey;
border-radius: 4px;
padding: 10px;
font-size: 1.1rem;
:hover{
background: white;
color: #273145;
transition-duration: 1s;
box-shadow: 1px 1px 10px 3px #273145;
cursor: pointer;
}
`

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
      setIsLucky("Yay! That's a lucky birthday number.");
    }
    else {
      setIsLucky('Oops, not lucky. Try some other number maybe?');
    }
  }

  return (
    <Main>
      <center>
        <Heading> Is your birthday lucky? </Heading>
        <Form>
          <label> Date of birth  </label> <br />
          <Input required onChange={(e) => setDob(e.target.value)} type="date" /> <br />
          <label>Lucky number</label> <br />
          <Input required onChange={(e) => setLuckyNo(e.target.value)} type="number" placeholder="Enter a lucky number" /><br />
          <Button onClick={handleSubmit}> Submit </Button>
          <div style={{ 'marginTop': '10px' }} hidden={isLucky == undefined ? true : false}>
            {isLucky}
          </div>
        </Form>
      </center>
    </Main>
  );
}

export default App;

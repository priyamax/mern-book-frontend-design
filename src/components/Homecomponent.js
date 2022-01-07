import React from 'react';

import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';


import SliderComponent from './SliderComponent';

function Home() {
  const history = useHistory();
  return (
    <>
      <div>
        <h1 style={{ padding: "20px", textAlign: "center", color: 'blue', textShadow: ' 2px 2px #414345' }}><b>Welcome to Digital Library </b></h1>
        <div  style={{fontSize:"23px",textAlign:'center'}}>
        <pre><center><marquee behavior="scroll" direction="right"><b><i>“ The beautiful thing about learning is that nobody can take it away from you.”</i></b></marquee></center></pre>
   </div>
      <center><Button variant ="contained" onClick={(e) => { history.push('/sign-in'); }}>Login</Button>&nbsp;
      <Button variant="contained" onClick={(e)=>{history.push('/sign-up');} }>Sign up</Button></center>
      </div><br/>

      <SliderComponent />
      <br/>
   
    </>
  );
}
export default Home;

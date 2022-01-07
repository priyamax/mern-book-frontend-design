import React from 'react';

import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Typography, IconButton, Card, CardActions, CardContent, Grid } from '@mui/material';
import SliderComponent from './SliderComponent';
import kids from './kids1.jpg';

import horror from './BestHorrorNovels.jpg';
import librarybooks from './lilbrarybooks.jpg';
function Home() {
  const history = useHistory();
  return (
    <>
    <div className='bg'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DIGITAL - LIBRARY
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <SliderComponent />
      <br />

  
        {/* <h1 style={{ padding: "20px", textAlign: "center", color: 'blue', textShadow: ' 2px 2px #414345' }}><b>Welcome to Digital Library </b></h1> */}
        <div style={{ fontSize: "23px", textAlign: 'center',color:'black',marginLeft:'100px' }}>
          <pre><center><marquee width='80%' height='100px' direction="up"><b><i>  “ The beautiful thing about learning is that nobody can take it away from you.”</i></b></marquee></center></pre>
        </div>
<br/>
        <div className='grid'>

          <div className='flex'>
            <Card sx={{ width: 350, height: 250,marginLeft:'115px', border: '2px solid #0000', borderRadius: '25px', transition: '0.5s ease-in-out', '&:hover': { transform: 'translateY(-10px)', boxShadow: '-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)', img: { transform: 'scale(1.05)', }, Button: { opacity: '1', } }, }}>
              <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }} color="blue" gutterBottom>
                  BED-TIME STORIES
                </Typography>
                <hr></hr>
                <img className='kids' src={kids} alt='kids'/>
              </CardContent>
            </Card>
         
            <Card sx={{ width: 350, height: 250, border: '2px solid #0000', borderRadius: '25px', transition: '0.5s ease-in-out', '&:hover': { transform: 'translateY(-10px)', boxShadow: '-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)', img: { transform: 'scale(1.05)', }, Button: { opacity: '1', } }, }}>
              <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }} color="blue" gutterBottom>
                  HORROR NOVELS
                </Typography>

                <hr></hr>
                <img className='kids' src={horror} alt='kids'/>
              </CardContent>
            </Card>

            <Card sx={{ width: 350, height: 250, border: '2px solid #0000', borderRadius: '25px', transition: '0.5s ease-in-out', '&:hover': { transform: 'translateY(-10px)', boxShadow: '-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)', img: { transform: 'scale(1.05)', }, Button: { opacity: '1', } }, }}>
              <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }} color="blue" gutterBottom>
                  LIBRARY-BOOKS
                </Typography>

                <hr></hr>
                <img className='kids' src={librarybooks} alt='kids'/>
              </CardContent>
            </Card>
          </div>
        </div>
        <br/>
        <br/>
        <div className='explore'>
          <p>To Explore More....</p>
        </div>
        <br/>
        <center><Button variant="contained" onClick={(e) => { history.push('/sign-in'); }}>Login</Button>&nbsp;
          <Button variant="contained" onClick={(e) => { history.push('/sign-up'); }}>Sign up</Button></center>
    <br />
      <br />
      <br/>
      <div className='footer'>
       <span>copyrights@priya321</span>
      </div>
      </div>
    </>
  );
}
export default Home;

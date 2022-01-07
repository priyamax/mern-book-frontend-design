import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Card, CardActions, CardContent, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import book from './image1.jpg';
import '../App.css'

function BookAdminComponent(props) {
    const [BookList, setBookList] = useState([]);
    useEffect(async () => {
        const token = localStorage.getItem('token');
        var decodedToken = jwt.decode(token);
    
        if (decodedToken.exp * 1000 <= Date.now()) {
            console.log("expired");
            props.history.push('/')
        } else {
            var response = await axios.get('https://fullstack-backend-book-design.herokuapp.com/book/getbook',
                {
                    headers: {
                        'access-token': token
                    }
                })
            console.log(response.data)
            setBookList(response.data);
        }
    }, [])


    return (
        <>
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
                            Book - Lists
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ padding: '30px' }}>
                <Grid container spacing={4}>
                    {BookList.map(row => (
                        <Grid item key={row._id}>
                            <Card sx={{ width: 250 }}>
                                <CardContent>
                                <img className='book' src={book} alt='book'/>
                                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                        <b>
                                        {row.bookname}
                                        </b>
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        
                                        Author: {row.authorname}
                                    </Typography>
                                    <Typography >
                                        Published: {row.published}
                                    </Typography> <br />
                                    <Button variant="text" href={`${row.link}`} target="_blank">
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid><br/>
                <div className='App'>
               <Button variant="contained" onClick={(e)=> props.history.push('/createbook')}>ADD</Button>&nbsp;
                <Button variant="contained" onClick={(e)=> props.history.push('/deletebook')}>Delete</Button>
                </div>
            </div>
        </>
    )
}


export default BookAdminComponent;

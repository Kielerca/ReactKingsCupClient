import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardContainer from '../CardContainer/CardContainer';
import TextContainer from '../TextContainer/TextContainer';
import DescContainer from '../DescContainer/DescContainer';
import InfoBar from '../InfoBar/InfoBar';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { FormControlLabel, Switch } from '@material-ui/core/';

import './Chat.css';




const useStyles = makeStyles((theme) => ({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.secondary.main,
    },
    donate: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.primary.light,
      },

    
  }));

  const themeObject = {
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
        type: 'dark'
      }
    

  }
  
  const useDarkMode = () => 
  {
    const [theme, setTheme] = useState(themeObject);
    //let theme = themeObject;
    const{ palette: {type}} = theme;

    const toggleDarkMode = () => {
        const updateTheme = {
            ...theme, 
            palette: {
                ...theme.palette, type: type === 'light' ? 'dark' : 'light'
            }
        }
        setTheme(updateTheme);
    }

    return [theme, toggleDarkMode ]
  }

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [status, setStatus] = useState('');
  const [turn, setTurn] = useState('');
  const [placement, setPlacement] = useState('');
  const [gameOver, setGameOver] = useState('');
  const [circleBroke, setCircleBroke] = useState('');

  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [card, setCard] = useState('');
  const [readyFlag, setreadyFlag] = useState('');
  const [userState, setUserState] = useState('');


  const ENDPOINT = 'https://react-kings-cup.herokuapp.com/';

 
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    setGameOver(false);
    setCircleBroke(false);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
  
    socket.on("updateCard", ({users,  card}) => {
        setUsers(users);
        setCard(card);  
        setreadyFlag("1") // Show the card
      });

    socket.on("updateTurn", ({users, status, turn}) => { 
        setUsers(users);
        
        setTurn(turn);
        setreadyFlag("0") // hide card


        if (status === "Game Over")
        {
            setGameOver(true);
            alert("Game Over");
        }
        else if (status === "Circle Broke")
        {
            return
        }
        else 
        {
            setStatus(status);
        }


      });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    socket.on("CircleBroke", ({ username }) => {
        
        if (circleBroke === false)
        {
            alert("Circle broke by: " +username);
            setCircleBroke(true);
        }
       
    });

   
}, []);


  const sendMessage = (num) => {
    
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
    if(num) {
       // setUserState("Ready"); 
        socket.emit('sendMessage', num, () => setMessage(''));
    }
  }


  const drawCard = () => 
  {
    socket.emit("ShowCard" , true );
    // dont set ready flag in til the response is made in UpdateCard socketon
  };

  const placeInCan = (num) => 
  {
    socket.emit("PlaceInCan" , num );
  
    //socket.emit("ShowCard" , false );    
  };

  const restartGame = () => 
  {
    setGameOver(false);
    setCircleBroke(false);
    socket.emit("PlayAgain" );
    alert("Game Restarted! Draw a card to begin!");
  
  };



  const classes = useStyles();
  const [theme, toggleDarkMode]  = useDarkMode();
  const themeConfig = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={themeConfig}>

    
   
<Container component="main"  >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h3" gutterBottom color="primary" align="center">
                Kings Cup 
            </Typography>
            <Typography variant="h6" gutterBottom color="primary" align="center">
                You are in Room: {room} - {status === "Game Over" ? status : "Game In Progress"}
            </Typography>
        
            <Button  
                variant="contained"
                //color= {readyFlag === "1" ? "primary" :"secondary"}
                className={classes.submit}
                size="large"
                disabled = {turn ? (turn === name ? false : true) : false}
                onClick={()=> drawCard()}
               
                > Draw From The Top
            </Button>
           
            <Grid container  direction="row"
                           justify="space-around"
                            alignItems="center"
                            spacing ={0}>
                
                      
                        <Grid item xs  >  
                       
                            <TextContainer users={users}/>
                           
                        </Grid>
                        <Grid item xs  >  
                     
                                <CardContainer users={users} room={room} card={card} status={status} readyFlag={readyFlag}/>
                             
                        </Grid>

                        <Grid item xs >  
                       
                                <DescContainer  card={card} readyFlag={readyFlag}/>
                            
                        </Grid>


                         
                   
                </Grid>
               

                <Button  
                variant="contained"
                //color= {readyFlag === "1" ? "primary" :"secondary"}
                className={classes.submit}
                size="large"
                disabled = {turn ? (turn === name ? false : true) : false}
                onClick={()=> drawCard()}
               
                >  Draw From Bottom
            </Button>
            
                <Box mt={2} >
                <InfoBar room={room} readyFlag={readyFlag} func={placeInCan} placement={placement} setPlacement={setPlacement}/>
            </Box>        
                           
           
        </div>

        <Box mt={8} align="center">
        <Button  
                variant="contained"
                
                className={classes.submit}
                size="large"
                disabled = {gameOver ? false : true}
                onClick={()=> restartGame()}
                >  Play Again
        </Button>
        </Box>

    <Box mt={8} align="center">
        
        <FormControlLabel control ={<Switch onClick={toggleDarkMode}/>} label="Change To Light/Dark Mode"/>
        <Typography variant="body2" color="primary" align="center">
            {'App Built by: '}
            <Link color="inherit" href="https://www.linkedin.com/in/casey-kieler/">
                Kieler Software
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>

        <Box mt={2} >
            <Button 
                align="center" 
                variant="contained" 
                className={classes.donate}
                onClick={()=>  window.open("https://www.paypal.me/CaseyKieler")}>Donate 
            </Button>
        </Box>
    </Box>

    </Container>


    </MuiThemeProvider>

  );
}

export default Chat;

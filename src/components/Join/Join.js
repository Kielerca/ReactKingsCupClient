import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import './Join.css';

const useStyles = makeStyles((theme) => ({
    
   
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
    },

    formControl: {
        margin: theme.spacing(3, 0, 2),
        minWidth: 400,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
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

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const [userType, setUserType] = useState('');



  const handleChange = (event) => {
    setUserType(event.target.value);
  };


  const classes = useStyles();
  const themeConfig = createMuiTheme(themeObject);

  return (
    <MuiThemeProvider theme={themeConfig}>
<Container component="main" maxWidth="xs" >
<CssBaseline />
<div className={classes.paper}>
  <Avatar className={classes.avatar}>
    <LockOutlinedIcon />
  </Avatar>
  <Typography component="h1" variant="h5">
    Join Session
  </Typography>
  <form className={classes.form} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="Name"
      label="Name"
      name="name"
      autoComplete="name"
      autoFocus
      onChange={(event) => setName(event.target.value)}
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="room"
      label="Room"
      type="room"
      id="room"
      autoComplete="current-password"
      onChange={(event) => setRoom(event.target.value)}
    />

    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" >Who's Joining? (Optional)</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={userType}
          onChange={handleChange}
          label= {"Who's Joining? (Optional)"}
        >
          <MenuItem value={"Not SM"}>Team Member</MenuItem>
          <MenuItem value={"SM"}>Scrum Master / PO</MenuItem>
        </Select>
    </FormControl>

    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary" 
      className={classes.submit}
      > Join! </Button>
    </Link>
   
    </form>
      </div>

      </Container>
      </MuiThemeProvider>
  );
}

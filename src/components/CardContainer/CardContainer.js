import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';


import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';


const RED_CARD    = "https://cdn.glitch.com/b16215ce-4dc6-4709-8cfd-1b292c2ec80d%2FRed_back.jpg?v=1593120245214";
const GREEN_CARD  = "https://cdn.glitch.com/b16215ce-4dc6-4709-8cfd-1b292c2ec80d%2FGreen_back.jpg?v=1593120239709";
const BLUE_CARD   = "https://cdn.glitch.com/b16215ce-4dc6-4709-8cfd-1b292c2ec80d%2Fblue_back.jpg?v=1593126050558";


const CardContainer = ({ users , room,card,status, readyFlag }) => (
 
<div> 
  
        <Box  borderColor="primary.main"  margin="auto" border={1}  borderRadius="10%"> 
            <Grid container spacing={2}  style={{ minWidth: "25vh" }} direction="column"  alignItems="center" justify="center"  >
           
               
                <Grid item xl={6}   >   
                <img width={"110"} justifyContent="center"  alignItems="center" alt={card.name} src={((readyFlag === "1") ? (card.img) : (status === "Very Close" ? RED_CARD: (status === "Close" ? BLUE_CARD: BLUE_CARD))) }/>
                </Grid>
               
             

            </Grid>

            </Box>
        

</div>

);

export default CardContainer;
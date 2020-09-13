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


import RED_CARD  from  '../../Assets/JPEG/Red_back.jpg';
import GREEN_CARD from "../../Assets/JPEG/Green_back.jpg";
import YELLOW_CARD   from "../../Assets/JPEG/Yellow_back.jpg";


const CardContainer = ({ users , room,card,status, readyFlag }) => (
 
<div> 
  
     
            <Grid container spacing={0}  style={{ minWidth: "25vh" }} direction="column"  alignItems="center" justify="center"  >
           
               
                <Grid item xl={1}   >   
                <img width={"160"} justifyContent="center"  alignItems="center" alt={card.image} src={((readyFlag === "1") ? (card.image) : (status === "Very Close" ? RED_CARD: (status === "Close" ? YELLOW_CARD: GREEN_CARD))) }/>
                </Grid>
               
             

            </Grid>

          
        

</div>

);

export default CardContainer;
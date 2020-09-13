import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { spacing } from '@material-ui/system';

import './InfoBar.css';

const countSelected = (num, setPlacement , func) => {
    setPlacement(num);
    func(num);

}


const InfoBar = ({ room, func, readyFlag, placement ,setPlacement}) => (
  <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  spacing ={1}
  >
    <Grid item xl>
    <Button fullWidth variant="contained" color="primary" disabled = {readyFlag === "1" ? false : true} className="sendButton" 
                        onClick={() => countSelected("1", setPlacement, func)}>Place Gently In Can </Button>
    </Grid>
    <Grid item xl>
    <Button fullWidth variant="contained" color="primary"  disabled = {readyFlag === "1" ? false : true} className="sendButton"
                         onClick={() => countSelected("2",setPlacement, func)}>Place Card In Can</Button>
    </Grid>
    <Grid item xl>
      <Button fullWidth variant="contained" color="primary" disabled = {readyFlag === "1" ? false : true} className="sendButton" 
                        onClick={() => countSelected("3", setPlacement, func)}>Place HARD In Can</Button>
      </Grid>


     
      </Grid>
);

export default InfoBar;
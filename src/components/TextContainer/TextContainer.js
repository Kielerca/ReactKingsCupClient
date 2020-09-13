import React from 'react';
import Typography from '@material-ui/core/Typography';
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';




const TextContainer = ({ users }) => (
  <div >

    {
      users
        ? (
          <div>
            <Typography variant="h5" gutterBottom color="primary" align="center">
                People Currently Playing:
            </Typography>
            <Grid container spacing={2}  style={{ minWidth: "25vh" }} direction="column"  alignItems="center" justify="center"  >
 
                {users.map(({name, myTurn}) => (
                   
                   <Grid item xl={6}    key={name} >   
                
                     <Box  borderColor={myTurn ? "green": "black"}  margin="" border={1}  borderRadius="10%"> 
                

                    <Typography  variant="h5"  style={{ minWidth: "25vh" }} gutterBottom color="primary" align="center">
                        {name} 
                    </Typography>
       
                 
                    </Box>
                    </Grid>
                ))}
             
             </Grid>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
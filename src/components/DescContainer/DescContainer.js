import React from 'react';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';


const DescContainer = ({ card , readyFlag }) => (
 
<div> 
 
    <Grid container  spacing={2} direction="row" justify="space-around" alignItems="center" wrap='nowrap'>
        
        <Grid item xl={6}  justifyContent="center" >   
            <Box  borderColor="primary.main" style={{ minWidth: "30vh", minHeight: "25vh" }}  margin="auto" border={2}   padding={5} borderRadius="10%"> 
                <Grid container spacing={2}   direction="column"  alignItems="center" justify="center" >
                <Grid item xl={6}  >  
                    <Typography variant="h4" color="primary" style={{ minHeight: "5vh" }} >
                        {readyFlag ==="1" ? card.name : "????"}
                    </Typography>
                    </Grid>
                    
                    <Grid item xl={6}  >   
                    <Typography variant="h5" color="primary" >
                        {readyFlag ==="1" ? card.value : "????"}
                    </Typography>
                    </Grid>

                </Grid>

                </Box>
            </Grid>
            
        
    </Grid>

   
</div>

);

export default DescContainer;
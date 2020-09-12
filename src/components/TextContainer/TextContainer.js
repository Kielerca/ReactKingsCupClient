import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';
import Box from '@material-ui/core/Box';

const TextContainer = ({ users }) => (
  <div className="textContainer">

    {
      users
        ? (
          <div>
            <h1>People currently playing:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name, myTurn}) => (
                  <div key={name} className="activeItem">
                     <Box  borderColor={myTurn ? "green": "grey"}  margin="auto" border={3}  borderRadius="10%"> 
                    {name} 
                    <img alt="Online Icon" src={onlineIcon}/>
                    {myTurn ? "Your Turn" : ""}
                    </Box>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
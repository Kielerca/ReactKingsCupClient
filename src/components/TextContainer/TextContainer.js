import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

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
                    {name} 
                    <img alt="Online Icon" src={onlineIcon}/>
                    {myTurn ? "Your Turn" : ""}
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
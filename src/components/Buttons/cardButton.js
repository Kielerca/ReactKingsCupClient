import React from 'react';

import './cardButton.css';

const cardButton = ({ sendMessage }) => (
  <form className="form">
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default cardButton;
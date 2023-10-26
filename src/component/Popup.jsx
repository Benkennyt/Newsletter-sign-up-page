import React, { useState } from 'react';
import Success from '../assets/images/icon-success.svg';
import './Popup.css';

const Popup = ({onDismiss, mail}) => {



  return (
      <div className='popup'>
        <div className='popup-1'>
          <img src={Success} alt='success-icon' />
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to <span>{mail}</span>. Please open it and click the button insed to confirm your subsription.</p>
          <button type='button' onClick={onDismiss} >Dismiss message</button>
        </div>
      </div>
  )
}

export default Popup
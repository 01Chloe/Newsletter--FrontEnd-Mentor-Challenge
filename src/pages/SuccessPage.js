import React from 'react';
import '../styles/successPage.css';
import successIcon from '../assets/icon-success.svg';

export default function SuccessPage({ success, setSuccess }) {
     const refreshButton = () => {
          setSuccess(!success);
     }
     return (
          <div className='success-page-container'>
               <img src={successIcon} alt="success icon" className='success-img' />
               <h2>Thanks for subscribing!</h2>
               <p>A confirmation email has been sent to <span>ash@loremcompany.com</span>. <br />Please open it and click the button inside to confirm your subscription.</p>
               <button onClick={refreshButton}>Dismiss message</button>
          </div>
     )
}
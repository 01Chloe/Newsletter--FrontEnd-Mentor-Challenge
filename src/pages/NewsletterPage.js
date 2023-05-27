import React from 'react';
import '../styles/newsletterPage.css';
import EmailValidation from '../components/EmailValidation';
import illustrationSignUpMobile from '../assets/illustration-sign-up-mobile.svg';
import illustrationSignUpDesktop from '../assets/illustration-sign-up-desktop.svg';
import iconList from '../assets/icon-list.svg';

export default function NewsletterPage({ success, setSuccess }) {
     return (
          <div className='newsletter-container'>
            <div className='left-side'>
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className='list-item'>
                <img src={iconList} alt="icon" />
                <span>Product discovery and building what matters</span>
              </div>
              <div className='list-item'>
                <img src={iconList} alt="icon" />
                <span>Measuring to ensure updates are a success</span>
              </div>
              <div className='list-item'>
                <img src={iconList} alt="icon" />
                <span>And much more!</span>
              </div>
              <EmailValidation success={success} setSuccess={setSuccess} />
            </div>
            <div className='right-side'>
              <img src={illustrationSignUpMobile} alt="illustration sign up for mobile" className='illustration-mobile' />
              <img src={illustrationSignUpDesktop} alt="illustration sign up for desktop" className='illustration-desktop' />
            </div>
          </div>
     )
}
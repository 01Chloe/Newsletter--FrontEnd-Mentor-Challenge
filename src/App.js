import React, { useState } from 'react';
import './App.css';
import NewsletterPage from './pages/NewsletterPage';
import SuccessPage from './pages/SuccessPage';

export default function App() {
  const [success, setSuccess] = useState(false);
  return (
    <div className='app-container'>
     {success ? (
       <SuccessPage success={success} setSuccess={setSuccess} />
     ) : (
       <NewsletterPage success={success} setSuccess={setSuccess} />
     )}
     <footer class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/01Chloe">Allier Chloé</a>.
     </footer>
    </div>
  );
}

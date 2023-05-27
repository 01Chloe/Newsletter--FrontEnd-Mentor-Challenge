import React, { useState } from 'react';
import '../styles/emailValidation.css';

export default function EmailValidation({ success, setSuccess }) {
     const [email, setEmail] = useState('');
     const [isValid, setIsValid] = useState(false);
     const [isDirty, setIsDirty] = useState(false);

     const validateEmail = (e) => {
          e.preventDefault();
          const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          setIsValid(regExpEmail.test(email));
          setIsDirty(true);
          if(isValid) {
               setSuccess(!success);
          }
     }
     const inputClassName = isDirty && !isValid ? 'input-not-valid' : '';
     return (
          <>
            <form>
               <div className='infos-container'>
                 <label htmlFor="email">Email adress</label>
                 {isDirty && !isValid && (
                   <small className='email-error-msg'>Valid email required</small>
                 )}
               </div>
               <input className={inputClassName}
                 type="email" 
                 name="email" 
                 id="email" 
                 placeholder="email@company.com"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} 
               />
               <button type="submit" onClick={validateEmail}>Subscribe to monthly newsletter</button>
            </form>
          </>
     )
}
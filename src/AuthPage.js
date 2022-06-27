import React, { useState } from 'react';
import { signIn, signUp } from './services/FetchUtils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const user = await signUp(email, password);
    setUser(user);
  }

  async function handleInSubmit(e) {
    e.preventDefault();
  
    const user = await signIn(signInEmail, signInPassword);
    setUser(user);   
  }


  
  return (
    <div className='intro'>
      <h3>Winchesters Guide to Monsters</h3>
      <form className='up' onSubmit={handleSubmit}>
        <p>SIGN UP</p>
        <label className='labels'>email
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
        </label>
        <label className='labels'>password
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
        </label>
        <button className='button'>SIGN UP</button>
      </form>
      <form className='in' onSubmit={handleInSubmit}>
        <p>SIGN IN</p>
        <label className='labels'>email
          <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email" />
        </label>
        <label className='labels'>password
          <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password" />
        </label>
        <button className='button'>SIGN IN</button>
      </form>
    </div>
  );
}

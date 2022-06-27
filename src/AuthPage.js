import React, { useState } from 'react';
import { signIn, signUp } from './services/FetchUtils';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(email, password);
      setUser(user);   
    } catch (e) {
      setError(e.message);
    }
  }
  
  return (
    <div>
      <h3>Winchesters Guide to Monsters</h3>
      <h1 className='error'>{error}</h1>
      <form className='up' onSubmit={handleSubmit}>
        <p>SIGN UP</p>
        <label>email
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
        </label>
        <label>password
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
        </label>
        <button>SIGN UP</button>
      </form>
      <form className='in' onSubmit={handleSubmit}>
        <p>SIGN IN</p>
        <label>email
          <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email" />
        </label>
        <label>password
          <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password" />
        </label>
        <button>SIGN IN</button>
      </form>
    </div>
  );
}

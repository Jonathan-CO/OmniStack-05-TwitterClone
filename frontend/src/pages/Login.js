import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import twitterLogo from '../twitter.svg'
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const history = useHistory();
  function handleSubmit(e){
    e.preventDefault();
    if(!username) return;

    localStorage.setItem('@GoTwitter:username', username);
    history.push('/timeline')
  }

  return (
    <div className="login-wrapper">
      <img src={twitterLogo} alt="GoTwitter" />
      <form onSubmit={handleSubmit}>
        <input 
        value={username} 
        placeholder="nome de usuário" 
        onChange={e => setUsername(e.target.value)}/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
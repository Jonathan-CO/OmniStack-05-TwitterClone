import React, { useState } from 'react';
// import {useHistory} from 'react-router-dom';
import api from '../services/api';
import './Timeline.css';
import twitterLogo from '../twitter.svg';

export default function Timeline() {

  const [newTweet, setNewTweet] = useState('');

  async function handleNewTweet(e) {
    if (e.keyCode !== 13) return;    

    
    const content = newTweet;
    const author = localStorage.getItem('@GoTwitter:username')
    
    await api.post('/tweets', {
      author, content
    })
    
    setNewTweet('');
  }

  return (
    <div className="timeline-wrapper">
      <img height={24} src={twitterLogo} alt="GoTwitter" />
      <form>
        <textarea
          value={newTweet}
          onChange={e => setNewTweet(e.target.value)}
          onKeyDown={handleNewTweet}
          placeholder="O que está acontecendo?"
        />
      </form>

    </div>
  )
}
import React, { useState, useEffect } from 'react';
import socket from 'socket.io-client';

import api from '../services/api';
import './Timeline.css';
import Tweet from '../components/Tweet';


import twitterLogo from '../twitter.svg';

export default function Timeline() {

  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const io = socket('http://localhost:3333');


  useEffect(() => {
    async function getTweets(){
      const response = await api.get('/tweets');
      setTweets(response.data);
    }
    getTweets();
    
  }, [])

  async function handleNewTweet(e) {
    if (e.keyCode !== 13) return;
    const content = newTweet;
    const author = localStorage.getItem('@GoTwitter:username')

    await api.post('/tweets', {
      author, content
    })


    setNewTweet('');
    // console.log("My tweets" + tweets)

  }

  useEffect(()=>{
    io.on('tweet', data =>{
      console.log(data)
      setTweets([data,...tweets])
      // console.log(tweets)
    })
    io.on('like', data =>{
      setTweets(tweets.map(tweet => tweet._id === data._id ? data : tweet))
    })
  }, [io, tweets])

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


      <ul className="tweet-list">
        {tweets.map(tweet => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))
        }
      </ul>
    </div>
  )
}
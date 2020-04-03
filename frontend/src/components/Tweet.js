import React from 'react';

import './Tweet.css';
import Like from '../like.svg';
import api from '../services/api';

export default function Tweet({ tweet }) {

  async function handlelike(){
    const {_id} = tweet;
    await api.post(`/likes/${_id}`)
  }
  return (
    <li className="tweet">
      <strong>{tweet.author}</strong>
      <p>{tweet.content}</p>
      <button type="button" onClick={handlelike}>
        <img src={Like} alt="like" />
        {tweet.likes }
      </button>
    </li>
  )
}

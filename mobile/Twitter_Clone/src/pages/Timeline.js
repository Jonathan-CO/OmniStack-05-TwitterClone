import React, {useState, useEffect} from 'react';
import socket from 'socket.io-client'
import {View, FlatList, Text, StyleSheet} from 'react-native';

import api from '../services/api';
import Tweet from '../components/Tweet';


export default function Timeline (){
  const [tweets, setTweets] = useState([]);
  

  useEffect(()=>{
    function subscribeToEvents() {
      const io = socket('http://10.0.3.2:3333');
  
      io.on('tweet', data =>{
        setTweets([data,...tweets])
      })
      io.on('like', data =>{
        setTweets(tweets.map(tweet => tweet._id === data._id ? data : tweet))
      })
    }

    async function getTweets(){
      const response = await api.get('tweets');
      setTweets(response.data)
    }
    getTweets();
    subscribeToEvents();
  },[tweets])

  

  return (
    <View style={styles.container}>
      <FlatList 
      data={tweets}
      keyExtractor={tweet => tweet._id}
      renderItem={({item}) =>  <Tweet tweet={item}/>}
      />
     
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

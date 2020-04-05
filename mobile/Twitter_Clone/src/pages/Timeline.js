import React, {useState, useEffect} from 'react';

import {View, FlatList, Text, StyleSheet} from 'react-native';

import api from '../services/api';
import Tweet from '../components/Tweet';


export default function Timeline (){
  const [tweets, setTweets] = useState([]);

  useEffect(()=>{
    async function getTweets(){
      const response = await api.get('tweets');
      setTweets(response.data)
    }
    getTweets();
  },[])

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

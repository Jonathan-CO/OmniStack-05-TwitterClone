import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Hearth from '../assets/hearth.png'
import api from '../services/api';

export default function Tweet({tweet}){

  function handleLike(){
    const {_id} = tweet;
    api.post(`likes/${_id}`) 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.author}>{tweet.author}</Text>
      <Text style={styles.content}>{tweet.content}</Text>

      <TouchableOpacity
      onPress={handleLike}
      style={styles.likeButton}>
        <Image source={Hearth} 
        style={{width: 20, height:20}} 
        tintColor="#999"/>
        <Text style={styles.likeText}>{tweet.likes}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  author: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C2022"
  },

  content: {
    fontSize: 15,
    lineHeight: 20,
    color: "#1C2022",
    marginVertical: 10
  },

  likeButton: {
    flexDirection: "row",
    alignItems: "center"
  },

  likeText: {
    color: "#999",
    marginLeft: 5
  }
});

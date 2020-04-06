import React, { useState, useEffect } from "react";
import api from "../services/api";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  StyleSheet,
  Image,
  Alert
} from "react-native";

import Close from '../assets/close.png'

export default function New({navigation}){
  const [newTweet, setNewTweet] = useState('');

  async function handleTweet(){
    const content = newTweet;
    const author = await AsyncStorage.getItem('@TwitterClone:username');
    await api.post('tweets', {author, content} );
    navigation.pop();
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{navigation.pop()}}>
            <Image source={Close}
            style={{width:24, height:24}}
            tintColor="#4bb0ee"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleTweet}>
            <Text style={styles.buttonText}>Tweetar</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          multiline
          placeholder="O que está acontecendo?"
          placeholderTextColor="#999"
          value={newTweet}
          onChangeText={setNewTweet}
          returnKeyType="send"
          onSubmitEditing={handleTweet}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  button: {
    height: 32,
    paddingHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#4BB0EE",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },

  input: {
    margin: 20,
    fontSize: 16,
    color: "#333"
  }
});

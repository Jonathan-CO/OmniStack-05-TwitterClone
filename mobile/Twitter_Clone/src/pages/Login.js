import React, {useState, useEffect} from 'react';

import {
    KeyboardAvoidingView, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import twitter from '../assets/twitter.png';

export default function Login({navigation}){
    const [username, setUsename] = useState('');

    async function handleLogin(){
        if(!username) return;
        await AsyncStorage.setItem('@TwitterClone:username', username)
        navigation.navigate('Timeline')
    }

    useEffect(()=>{
        async function getUsername(){
            const username = await AsyncStorage.getItem('@TwitterClone:username')
            if (username){
                navigation.navigate('Timeline')
            }
        }
    }, [])
    return (
        <KeyboardAvoidingView 
        behavior="padding"
        style={styles.container}>
            <View style={styles.content}>
                {/* <Icon name="twitter" size={64} color="#4bb0ee" /> */}
                <Image 
                source={twitter} 
                style={{ width:64, height:64 }} 
                tintColor={"#4bb0ee"}/>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de Usuário"
                    value={username}
                    onChangeText={setUsename}
                    onSubmitEditing={handleLogin}
                    returnKeyType="send"
                />
                <TouchableOpacity 
                onPress={handleLogin}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
           
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
      },
    
      content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30
      },
    
      input: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        height: 44,
        paddingHorizontal: 15,
        alignSelf: "stretch",
        marginTop: 30
      },
    
      button: {
        height: 44,
        alignSelf: "stretch",
        marginTop: 10,
        backgroundColor: "#4BB0EE",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
      },
    
      buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
      }
})
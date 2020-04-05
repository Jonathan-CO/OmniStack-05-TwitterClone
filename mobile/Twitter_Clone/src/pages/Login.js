import React, {useState} from 'react';

import {
    KeyboardAvoidingView, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import twitter from '../assets/twitter.png';

export default function Login(){
    const [username, setUsename] = useState('');
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
                    returnKeyType="send"
                />
                <TouchableOpacity 
                onPress={()=>{}}
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
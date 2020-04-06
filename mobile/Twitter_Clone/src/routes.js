import React, { useState, useEffect } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';
import { AsyncStorage, TouchableOpacity, Image, Text } from 'react-native';
import Add_Circle from './assets/add_circle.png'

const Stack = createStackNavigator();
const Home = createStackNavigator();

function App({ navigation }) {
    return (
        <Home.Navigator>
            <Home.Screen
                name="Timeline"
                component={Timeline}
                options={{
                    title: 'Início',
                    headerRight: () => (<>
                        <TouchableOpacity onPress={() => { navigation.navigate('New') }}>
                            <Image
                                source={Add_Circle}
                                style={{ width: 24, height: 24, marginRight: 20 }}
                                tintColor={"#4bb0ee"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { AsyncStorage.removeItem('@TwitterClone:username') 
                        navigation.navigate('Login') 
                        }}>
                            <Text style={{ width: 28, fontSize:16, marginRight: 16 }}>Sair</Text>
                        </TouchableOpacity>
                    </>
                    ),
                }}
            />
            <Home.Screen
                name="New"
                component={New}
                options={{ title: 'New', headerShown: false }}
            />
        </Home.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

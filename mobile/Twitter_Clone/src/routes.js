import React, { useState, useEffect } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';
import { AsyncStorage, TouchableOpacity, Image } from 'react-native';

import Add_Circle from './assets/add_circle.png'


const Stack = createStackNavigator();
const AppStack = createStackNavigator();

function App({navigation}) {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Timeline"
                component={Timeline}
                options={{
                    title: 'Início',
                    headerRight: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate('New')}>
                           <Image 
                           source={Add_Circle}
                           style={{
                               width:24, 
                               height:24,
                               marginRight: 20
                            }}
                           tintColor={"#4bb0ee"}
                           />
                        </TouchableOpacity>
                    ),
                    // headerStyle: {
                    //     backgroundColor:"#55a"
                    // },
                }}
            />
            <AppStack.Screen 
                name="New"
                component ={New}
                options={{
                    title: 'New',
                    headerShown: false 
                    // headerStyle: {
                    //     backgroundColor:"#55a"
                    // },
                }}
            />
        </AppStack.Navigator>
    )
}

function Routes() {

    const [sign, setSign] = useState(false)
    useEffect(() => {
        async function getUser() {
            const sign = await AsyncStorage.getItem('@TwitterClone:username');
            sign ? setSign(true) : setSign(false);
        }
        getUser();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator >
                {sign ? (
                    <Stack.Screen
                        name="App"
                        component={App}
                        options={{ headerShown: false }}
                    />
                ) : (
                        <Stack.Screen
                            name="Login"
                            component={Login} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
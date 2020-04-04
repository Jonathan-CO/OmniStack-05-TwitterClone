import React from 'react';

import {View, StyleSheet} from 'react-native';

export default function Login(){
    return (
        <View style={styles.container}/>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#482',
    },
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding: 30
    }
})
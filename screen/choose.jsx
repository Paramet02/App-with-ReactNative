import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, Button  } from 'react-native-paper';

const Choose = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
                      <Image style={{ height: 450, width: 380 }} source={require('../img/GroupLogo.png')}></Image>
                  </View>
                  <Button style={styles.button_container} mode="contained" onPress={() => navigation.navigate('Login')}>
                      <Text style={{ color: 'white' }}>Partner</Text>
                  </Button>
                  <Button style={styles.button_container_regsiter} mode="contained" onPress={() => navigation.navigate('firstpage')}>
                      <Text style={{ color: 'black' }}>User</Text>
                  </Button>
            </View>
        </View>
            
      )
};

export default Choose

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor : '#DFEDF2'
    },
    button_container: {
        padding : 4,
        margin : 6,
        backgroundColor : 'black'
    },
    button_container_regsiter: {
        padding : 4,
        margin : 6,
        backgroundColor : 'white'
    },
});

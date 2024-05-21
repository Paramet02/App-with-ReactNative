import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, Button  } from 'react-native-paper';


const Firstpage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.arrowcontainer}>
        </View>
        <View style={styles.container2}>
              <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                  <Image style={{marginTop : 20, height: 460, width: 380 }} source={require('../img/GroupLogo.png')}></Image>
              </View>
              <Button style={styles.button_container} mode="contained" onPress={() => navigation.navigate('Login')}>
                  <Text style={{ color: 'white' }}>Login</Text>
              </Button>
              <Button style={styles.button_container_regsiter} mode="contained" onPress={() => navigation.navigate('Register')}>
                  <Text style={{ color: 'black' }}>Register</Text>
              </Button>
        </View>
    </View>
        
  )
};

export default Firstpage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        alignSelf: 'center',
        justifyContent: 'center',
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
    arrowcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        padding : 10,
    },
});


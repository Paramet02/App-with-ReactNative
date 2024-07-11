import { View, Text, Image, StyleSheet , TouchableOpacity  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput, Button  } from 'react-native-paper';


const login = require("../img/login.png")
const register = require("../img/Register.png")

const Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>

              {/* IMG  */}
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                <Image style={{marginTop : 20, height: 460, width: 380 }} source={require('../img/GroupLogo.png')}></Image>
            </View>

              {/* LOGIN */}
            <View style={styles.Arrow}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Image source={login} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </View>

              {/* REGISTER */}
            <View style={styles.Arrow}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Image source={register} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
        
  )
};

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "white"
    },
    container2: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    Arrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        padding : 10,
    },
    img : {
        width : 331,
        height : 56,
    }
});


import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Forgot_Password = ({navigation}) => {
    const [username, setUsername] = useState("");

    return (
        <View style={{flex : 1}}>
            <View style={styles.buttoncontainer}>
                <Button onPress={() => navigation.goBack()}>
                    <Text style={{color : 'black'}}>Go back</Text>
                </Button>
            </View>
            <View style={{flex : 0.25 , backgroundColor : 'green' , justifyContent : 'center' , alignItems : 'center'}}>
                <Text style={styles.fontcontainer}>Forgot Password?</Text>
            </View>
            <View style={{justifyContent : 'center' , alignItems : 'center',paddingLeft : 35 , backgroundColor : 'blue'}}>
                <Text >Don't worry! It occurs. Please enter the email address linked with your account.</Text>
            </View>
            <View style={styles.Textinputcontainer}>
                <TextInput
                mode="outlined"
                label="Enter your email"
                value={username}
                onChangeText={text => setUsername(text)}
                />
            </View>
            <View style={{flex : 1 ,}}>
            <Button style={styles.logincontainer} mode="contained" onPress={() => console.log('Pressed')}>
                Login
            </Button>
            </View>
        </View>
    )
}

export default Forgot_Password

const styles = StyleSheet.create({
    buttoncontainer: {
        flex : 0.15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        paddingTop : 10,
    },
    fontcontainer: {
        color : 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    Textinputcontainer: {
        margin: 5,
        marginRight: 20,
        marginLeft: 30,
        paddingTop : 20
    },
    logincontainer: {
        borderRadius: 5, 
        width: 351,
        alignSelf: 'center',
        padding: 8,
        marginTop : 20
    },
});
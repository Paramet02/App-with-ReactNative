import { View, Text, Image, StyleSheet , TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


const backward = require("../img/back.png")

const Forgot_Password = ({navigation}) => {
    const [username, setUsername] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={{flex : 1 , backgroundColor : "white"}}>

                {/* BACK WARD */}
                <View style={styles.Arrow}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={backward} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* HEAD */}
                <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                    <View style={{width : 275 , height : 50}}>
                        <Text style={styles.font}>Forgot Password?</Text>
                    </View>
                </View>

                {/* BODY */}
                <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                    <View style={{width : 275 , height : 60 }}>
                        <Text style={styles.fontSize}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                    </View>
                </View>

                {/* TEXT INPUT */}
                <View style={styles.Texting}>
                    <TextInput
                    mode="outlined"
                    label="Enter your email"
                    value={username}
                    onChangeText={text => setUsername(text)}
                    />
                </View>

                {/* BUTTON */}
                <View style={{flex : 1 }}>
                    <Button style={styles.Login} mode="contained" onPress={() => navigation.navigate('OTP')}>
                        Send Code
                    </Button>
                </View>

                {/* BUTTON 2 */}
                <View style={styles.container2}>
                    <Text>Remember Password?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.colorText}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Forgot_Password

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start', 
        paddingTop : 10,
        paddingBottom : 30
    },
    font: {
        color : 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    Texting: {
        margin: 5,
        marginRight: 20,
        marginLeft: 30,
        paddingTop : 5
    },
    Login: {
        borderRadius: 10, 
        width: 351,
        alignSelf: 'center',
        padding: 8,
        marginTop : 20,
        backgroundColor: 'black'
    },
    fontSize: {
        color : 'black',
        fontSize : 15
    },
    img : {
        width : 41,
        height : 41
    },
    Arrow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding : 10,
    },
    colorText : {
      color : '#35C2C1',
      fontWeight: 'bold'
    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      paddingBottom: 15
    },
});
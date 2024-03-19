import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.arrowcontainer}>
            <Button onPress={() => navigation.goBack()}>
                <Text style={{color : 'black'}}>Go back</Text>
            </Button>
        </View>
        <View>
            <Image style={styles.imgcontainer} source={require('../img/Logo.png')}/>
        </View>
        <View style={styles.Textinputcontainer}>
            <TextInput
            mode="outlined"
            label="Enter your email"
            value={username}
            onChangeText={text => setUsername(text)}
            />
        </View>
        <View  style={styles.Textinputcontainer}>
            <TextInput
            mode="outlined"
            label="Enter your password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            value={password}
            onChangeText={text => setPassword(text)}
            />
        </View>
        <View>
            <Button style={styles.container2} onPress={() => navigation.navigate('Forgot_Password')}>
                <Text style={{color : 'black'}}>Forgot Password?</Text> 
            </Button>
        </View>
        <View style={{flex : 1}}>
            <Button style={styles.logincontainer} mode="contained" onPress={() => console.log('Pressed')}>
                Login
            </Button>
        </View>
        <View style={{flex : 0.25 , flexDirection : 'row' ,justifyContent : 'center' , alignItems : 'center'}}>
            <View>
                <Text >Already have an account?</Text>
            </View>
            <View>
                <Button onPress={() => navigation.navigate('Register')}> 
                    <Text style={{color : 'darkturquoise'}}>Register Now</Text>
                </Button>
            </View>
        </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center', 
        padding : 10,
    },
    logincontainer: {
        borderRadius: 5, 
        width: 351,
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 8
    },
    register: {
        flexDirection: 'row',
        justifyContent: 'flex-row', 
        padding : 20,
        top: 210,
    },
    textbutton: {
        backgroundColor : 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        color : 'black'
    },
    imgcontainer: {
        alignSelf: 'center',
        padding : 20,
        margin : 15,
        width: 187,
        height: 160,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    Textinputcontainer: {
        margin: 5,
        marginRight: 20,
        marginLeft: 30,
    },
    arrowcontainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding : 10,
    },
  });
import { View, Text, Image, StyleSheet , TouchableOpacity  } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

// -- import icons form github -- //
import Icon from 'react-native-vector-icons/AntDesign';

const backward = require("../img/back.png")

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>

        {/* BACK WARD */}
        <View style={styles.Arrow}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={backward} style={styles.img}/>
                </TouchableOpacity>
            </View>
        </View>

        {/* IMG */}
        <View>
            <Image style={styles.Img} source={require('../img/Logo.png')}/>
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
        <View  style={styles.Texting}>
            <TextInput
            mode="outlined"
            label="Enter your password"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            value={password}
            onChangeText={text => setPassword(text)}
            />
        </View>

        {/* BUTTON */}
        <View>
            <Button style={styles.container2} onPress={() => navigation.navigate('Forgot_Password')}>
                <Text style={{color : '#6A707C'}}>Forgot Password?</Text> 
            </Button>
        </View>
        <View style={{flex : 1}}>
            <Button style={styles.Login} mode="contained" onPress={() => navigation.navigate('UserMain')}>
                Login
            </Button>
        </View>

        {/* BUTTON 2 */}
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
        backgroundColor : "white"
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center', 
        padding : 10,
    },
    Login: {
        borderRadius: 10, 
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
    Img: {
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
    Texting: {
        margin: 5,
        marginRight: 20,
        marginLeft: 30,
    },
    Arrow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding : 10,
    },
    img : {
        width : 41,
        height : 41
    }
  });
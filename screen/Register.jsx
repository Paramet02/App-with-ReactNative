import { View, Text, StyleSheet, Image , TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

// -- import icons form github -- //
import Icon from 'react-native-vector-icons/AntDesign';

const backward = require("../img/back.png")

const Register = ({navigation}) => {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Email , setEmail] = useState("");
    const [Confirm , setConfirm] = useState("");
    
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
        <View style={styles.container}>

            {/* BACK WARD */}
            <View style={styles.Arrow}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backward} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* HEAD */}
            <View style={{justifyContent : 'center' , alignItems : 'center',paddingBottom : 30}}>
                    <Text style={styles.Font}>Create an account</Text>
            </View>
            
            {/* TEXT INPUT */}
            <View style={styles.Texting}>
                <TextInput
                mode="outlined"
                label="Username"
                value={Username}
                onChangeText={text => setUsername(text)}
                />
            </View>
            <View style={styles.Texting}>
                <TextInput
                mode="outlined"
                label="Email"
                value={Email}
                onChangeText={text => setEmail(text)}
                />
            </View>
            <View style={styles.Texting}>
                <TextInput
                mode="outlined"
                label="Password"
                value={Password}
                onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={styles.Texting}>
                <TextInput
                mode="outlined"
                label="Confirm Password"
                value={Confirm}
                onChangeText={text => setConfirm(text)}
                />
            </View>

            {/* BUTTON */}
            <View style={{flex : 1, paddingTop : 35}}>
                <Button style={styles.Login} mode="contained" onPress={() => navigation.navigate('Screen')}>
                    Register
                </Button>
            </View>

            {/* BUTTON2 */}
            <View style={styles.container2}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.colorText}> Login Now</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </KeyboardAvoidingView>
  )
};

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "white"
    },
    Login: {
        borderRadius: 5, 
        width: 351,
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 8
    },
    Texting: {
        margin: 5,
        marginRight: 20,
        marginLeft: 30,
    },
    Font: {
        color : 'black',
        fontWeight: 'bold',
        fontSize: 30,
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
    container2 : {
      flexDirection : 'row',
      justifyContent : 'center', 
      alignItems : 'center',
      paddingBottom : 15
    },
    colorText : {
      color : '#35C2C1',
      fontWeight: 'bold'
    }
  });
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet , TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';

const backward = require("../img/back.png")


const New_password = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
        <View style={{flex : 1 , backgroundColor : "white"}}>

            {/* BACKWARD */}
            <View style={styles.Arrow}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backward} style={styles.img}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* HEAD */}
            <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                <View style={{width : 300 , height : 50}}>
                    <Text style={styles.font}>Create new password</Text>
                </View>
            </View>

            {/* BODY */}
            <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                <View style={{width : 300 , height : 60 }}>
                    <Text style={styles.fontSize}>Your new password must be unique from those previously used.</Text>
                </View>
            </View>
            
            {/* TEXT INPUT */}
            <View style={styles.Texting}>
                <TextInput
                mode="outlined"
                label="Enter your username"
                value={username}
                onChangeText={text => setUsername(text)}
                />
            </View>
            <View style={styles.Texting}>
                <TextInput
                mode="outlined"
                label="Enter your Password"
                value={Password}
                onChangeText={text => setPassword(text)}
                />
            </View>

            {/* BUTTON */}
            <View style={{flex : 1}}>
                <Button style={styles.Login} mode="contained" onPress={() => navigation.navigate('Login')}>
                    Reset Password
                </Button>
            </View>
        </View>
    </KeyboardAvoidingView>
)
}

export default New_password

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
  Login: {
      borderRadius: 5, 
      width: 351,
      alignSelf: 'center',
      padding: 8,
      marginTop : 20,
      backgroundColor : 'black'
  },
  fontSize: {
      color : 'black',
      fontSize : 15
  },
  Texting: {
    margin: 5,
    marginRight: 20,
    marginLeft: 30,
    paddingTop : 5
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
});
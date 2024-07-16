import { View, Text, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { Button } from 'react-native-paper';

const backward = require("../img/back.png");

const OTP = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        
        {/* BACK WARD */}
        <View style={styles.Arrow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backward} style={styles.img}/>
            </TouchableOpacity>
        </View>

        {/* HEAD */}
        <View style={{justifyContent : 'center' , alignItems : 'center'}}>
            <View style={{width : 275 , height : 50}}>
                <Text style={styles.font}>OTP Verification</Text>
            </View>
        </View>

        {/* BODY */}
        <View style={{justifyContent : 'center' , alignItems : 'center'}}>
            <View style={{width : 275 , height : 60}}>
                <Text>Enter the verification code we just sent on your email address.</Text>
            </View>
        </View>

        {/* OTP */}
        <View style={{justifyContent : 'center' , alignItems : 'center'}}>
            <View style={{width : 300}}>
                <OtpInput
                  numberOfDigits={4}
                  focusColor="blue"
                  theme={{
                    pinCodeContainerStyle : {
                      width : 60,
                      height : 60,
                      borderRadius : 8,
                      pinCodeContainerStyle : "blue"
                    }
                  }}
                />
            </View>
        </View>

        {/* BUTTON */}
        <View style={{flex: 1, paddingTop: 35}}>
            <Button style={styles.Login} mode="contained" onPress={() => navigation.navigate('New_password')}>
              Verify
            </Button>
        </View>

        {/* RESEND BUTTON */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          style={styles.resendContainer}
        >
          <View style={styles.container2}>
            <Text>Didn't receive code?</Text>
            <TouchableOpacity>
              <Text style={styles.colorText}> Resend</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </KeyboardAvoidingView>
  );
}

export default OTP;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "white"
    },
    Arrow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 10,
    },
    img : {
      width: 41,
      height: 41
    },
    font: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
    Login: {
      borderRadius: 5, 
      width: 351,
      alignSelf: 'center',
      padding: 8,
      marginTop: 20,
      backgroundColor: 'black'
    },
    resendContainer: {
      justifyContent: 'flex-end',
    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      paddingBottom: 15
    },
    colorText: {
      color: '#35C2C1',
      fontWeight: 'bold'
    }
});

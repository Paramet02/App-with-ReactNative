import { View, Text, Image, StyleSheet , TouchableOpacity  } from 'react-native';
import React, { useState, useEffect } from 'react';
import { OtpInput } from 'react-native-otp-entry' 

const backward = require("../img/back.png")

const OTP = ({ navigation }) => {
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



    </View>
  )
}

export default OTP

const styles = StyleSheet.create({
    container:{
      flex : 1,
      backgroundColor : "white"
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
    },
    font: {
      color : 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
});
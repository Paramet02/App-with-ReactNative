import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { black, white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Home = () => {
  return (
    <View style={{flex : 1}}>
      <View style={{alignItems : 'flex-start', justifyContent : 'space-between',flexDirection : 'row' }}>
        <View style={{flexDirection : 'row' , paddingTop : 20 , paddingLeft : 10 }}>
          <Image source={require('../img/info.png')}></Image>
        </View>
        <View style={{flexDirection : 'row'}}>
          <View style={{ width : 50 , height : 50 , backgroundColor : 'black'}}></View>
          <View style={{ width : 50 , height : 50 , backgroundColor : 'red'}}></View>
        </View>
      </View>
    </View>
  )
}

export default Home
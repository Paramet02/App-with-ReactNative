import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{flex : 1}}>
      <View style={{alignItems : 'flex-start', justifyContent : 'space-between',flexDirection : 'row'}}>
        <View>
          <Image style={{ width : 68 , height : 36 }} source={require('../img/info.png')}></Image>
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
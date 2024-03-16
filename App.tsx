import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './sereen/Login'
import Firstpage from './sereen/firstpage'
import Choose from './sereen/choose'
import Forgot_Password from './sereen/Forgot_Password'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Choose" component={Choose} options={{ headerShown : false }}/>
        <Stack.Screen name="firstpage" component={Firstpage} options={{ headerShown : false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown : false }}/>
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
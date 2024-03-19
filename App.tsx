import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './screen/Login';
import Firstpage from './screen/Login_and_Register';
import Choose from './screen/choose';
import Forgot_Password from './screen/Forgot_Password';
import Register from './screen/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Choose" component={Choose} options={{ headerShown : false }}/>
        <Stack.Screen name="firstpage" component={Firstpage} options={{ headerShown : false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown : false }}/>
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{ headerShown : false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
import { View, Text } from '@react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// -- import icons form github -- //
import Icon from 'react-native-vector-icons/AntDesign';

// -- import form screen -- //
import React from 'react';
import Login from './screen/Login';
import Screen from './screen/Screen';
import Choose from './screen/choose';
import Forgot_Password from './screen/Forgot_Password';
import Register from './screen/Register';
import New_password from './screen/New_password';
import OTP from './screen/OTP';

// -- import form main  -- //
import Home from './main/Home';
import Profile from './main/Profile';
import Charge from './main/Charge';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen" component={Screen} options={{ headerShown : false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown : false }}/>
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{ headerShown : false }}/>
        <Stack.Screen name="New_password" component={New_password} options={{ headerShown : false }}/>
        <Stack.Screen name="OTP" component={OTP} options={{ headerShown : false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown : false }}/>
        <Stack.Screen name="UserMain" component={UserContent} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const UserContent = () => {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false , 
      tabBarStyle: { backgroundColor : '#00008b' } 
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name='Charge' component={Charge} />
      <Tab.Screen name="Map" component={Profile} />
    </Tab.Navigator>
  );
};
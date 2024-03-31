import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// -- import login page and register -- //
import React from 'react';
import Login from './screen/Login';
import Firstpage from './screen/Login_and_Register';
import Choose from './screen/choose';
import Forgot_Password from './screen/Forgot_Password';
import Register from './screen/Register';

// -- import main content for user -- //
import Home from './Maincontent/Home';
import Profile from './Maincontent/Profile';
import Charge from './Maincontent/Charge';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Choose" component={Choose} options={{ headerShown : false }}/>
        <Stack.Screen name="firstpage" component={Firstpage} options={{ headerShown : false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown : false }}/>
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{ headerShown : false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown : false }}/>
        <Stack.Screen name="UserMain" component={UserContent} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const UserContent = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name='Charge' component={Charge} />
      <Tab.Screen name="Map" component={Profile} />
    </Tab.Navigator>
  );
};
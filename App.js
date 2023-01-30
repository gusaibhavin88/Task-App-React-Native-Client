import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Addtask from './Screens/Addtask';
import Login from './Screens/Login';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Addtask' component={Addtask}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Addtask from './Screens/Addtask';
import Changepass from './Screens/Changepass';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import Viewtask from './Screens/Viewtask';
import { useDispatch } from 'react-redux';
import { Loaduser } from './Redux/Action';
import { Load } from './Screens/Load';
import Otp from './Screens/Otp';

const Stack = createNativeStackNavigator();

export default Main = () => {
  const isAuthenticated  =  useSelector((state) => state.auth.isAuthenticated)
  const loading  = useSelector((state) => state.auth.loading)
  const {user,message,error}  = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Loaduser())
  },[])




  return (
    loading ? <Load/> :
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = {isAuthenticated? "Viewtask" :"Login"} >
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="Viewtask" component={Viewtask} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Addtask" component={Addtask} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Changepass" component={Changepass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

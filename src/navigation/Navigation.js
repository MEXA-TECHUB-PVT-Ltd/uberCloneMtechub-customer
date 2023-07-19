// Navigation.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import AuthNav from './AuthNav/AuthNav';
import Drawerroute from './Drawer/Drawer';

const Navigation = ({isAuthenticated}) => {
  return (
    <NavigationContainer>
       <AuthNav />
    </NavigationContainer>
  );
};

export default Navigation;

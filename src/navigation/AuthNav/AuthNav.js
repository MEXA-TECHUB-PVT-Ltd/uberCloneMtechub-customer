import * as React from 'react';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import OnboardingScreen from '../../screens/OnboardingScreen/Onboarding';
import WelcomeScreen from '../../screens/AuthScreens/Welcome';
import Login from '../../screens/AuthScreens/Login';
import CreateAccount from '../../screens/AuthScreens/CreateAccount';
import ForgetPassword from '../../screens/AuthScreens/ForgetPassword';
import ResetPassword from '../../screens/AuthScreens/Resetpassword';
import Verification from '../../screens/AuthScreens/Verification';
import EnableLocation from '../../screens/AuthScreens/EnableLocation';

import Drawerroute from '../Drawer/Drawer';

const Stack = createNativeStackNavigator();
function AuthNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen
        name="EnableLocation"
        component={EnableLocation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Drawerroute"
        component={Drawerroute}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNav;

import * as React from 'react';
import {View, Text} from 'react-native';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Screens
import Profile from '../../screens/Profile/Profile';
import ChangeLanguage from '../../screens/StackScreens/Profile/ChangeLanguage';
import TermsCondition from '../../screens/StackScreens/Profile/Terms&Conditions';
import PolicyPrivacy from '../../screens/StackScreens/Profile/PolicyPrivacy';
import InviteFriends from '../../screens/StackScreens/Profile/InviteFriend';


function ProfileNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PolicyPrivacy"
        component={PolicyPrivacy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TermsCondition"
        component={TermsCondition}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangeLanguage"
        component={ChangeLanguage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InviteFriends"
        component={InviteFriends}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileNav;

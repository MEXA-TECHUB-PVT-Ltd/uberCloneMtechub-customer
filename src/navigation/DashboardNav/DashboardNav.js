import * as React from 'react';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Dashboard from '../../screens/Dashboard/Dashboard';
import Notification from '../../screens/StackScreens/Dashboard/Notification';
import SearchLocation from '../../screens/StackScreens/Dashboard/SearchLocation';
import PaymentMethod from '../../screens/StackScreens/Dashboard/PaymentMethod';
import OnGoingTrip from '../../screens/StackScreens/Dashboard/OnGoingTrip';
import CancleMenu from '../../screens/StackScreens/Dashboard/CancleMenu';
import Review from '../../screens/StackScreens/Dashboard/ReviewCancleRide';

//////////////chat screen///////////
//import ChatScreen from '../../screens/DrawerScreens/Chat/ChatScreen';

const Stack = createNativeStackNavigator();
function DashboardNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchLocation"
        component={SearchLocation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnGoingTrip"
        component={OnGoingTrip}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CancleMenu"
        component={CancleMenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default DashboardNav;

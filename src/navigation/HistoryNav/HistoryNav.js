import * as React from 'react';
import {View, Text} from 'react-native';

///////////////////navigation prop///////////////
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import HistoryRides from '../../screens/DrawerScreens/HistoryRides';
import RidesDetail from '../../screens/DrawerScreens/RidesDetail';

/////////////chat screen///////
//import ChatScreen from '../../screens/DrawerScreens/Chat/ChatScreen';

const Stack = createNativeStackNavigator();
function HistoryNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryRides"
        component={HistoryRides}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RidesDetail"
        component={RidesDetail}
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

export default HistoryNav;

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import {DrawerContent} from './CustomDrawer';

/////////////drawer screens////////
import DashboardNav from '../DashboardNav/DashboardNav';
import MyWallet from '../../screens/DrawerScreens/MyWallet';
import History from '../HistoryNav/HistoryNav';
import UpdateProfile from '../../screens/DrawerScreens/UpdateProfile';
import UpdatePassword from '../../screens/DrawerScreens/UpdatePassword';

const Drawer = createDrawerNavigator();

export default function Drawerroute() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="DashboardNav"
        component={DashboardNav}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="MyWallet"
        component={MyWallet}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="History"
        component={History}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="UpdateProfile"
        component={UpdateProfile}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="UpdatePassword"
        component={UpdatePassword}
      />
    </Drawer.Navigator>
  );
}

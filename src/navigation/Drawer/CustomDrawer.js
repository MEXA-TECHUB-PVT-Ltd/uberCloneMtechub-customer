import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ImageComponent,
  Image,
} from 'react-native';
import {Drawer, Text, Avatar, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

//////////////components///////////
import LogoutModal from '../../components/Modal/LogoutModal';

///////navigation////////
import {useNavigation} from '@react-navigation/native';

/////async//////////
import AsyncStorage from '@react-native-async-storage/async-storage';

////////////////app styles//////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/////////colors/////////
import Colors from '../../utils/Colors';

///////////////app fonts/////////////
import {fontFamily} from '../../constants/fonts';
import {appImages} from '../../constants/images';

//////////////svgs//////////////////
import Wallet from '../../assets/svgs/Drawer/Wallet_icon';
import Chat from '../../assets/svgs/Drawer/Chat_icon';
import History from '../../assets/svgs/Drawer/Doc_icon';
import Update from '../../assets/svgs/Drawer/Restart_icon';
import Password from '../../assets/svgs/Drawer/lock_icon';
import Theme from '../../assets/svgs/Drawer/theme_icon';
import Logout from '../../assets/svgs/Drawer/logout_icon';

export const DrawerContent = props => {
  ////////////navigation variable/////
  const navigation = useNavigation();

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  //////logout function//////
  const logout = async () => {
    // await AsyncStorage.removeItem('User_id');
    // await AsyncStorage.removeItem('JWT_Token');
    navigation.navigate('Login');
  };

  ///////switch/////
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{flex: 1, backgroundColor: Colors.AppBckGround_color}}>
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width: wp(59),
                height: hp(25),
              }}>
              <Image
                source={appImages.DrawerBG}
                style={{width: wp(82), height: hp(30)}}
                resizeMode="contain"
              />
              <View style={{position: 'absolute', left: wp(-2), top: hp(6)}}>
                <Avatar.Image
                  size={hp(10)}
                  style={{backgroundColor: '#E7E7E7'}}
                  source={require('../../assets/images/DrawerUser.png')}
                />
                <Text style={styles.username}>John Doe</Text>
                <Text style={styles.useremail}>example@gmail.com</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: hp(0.2),
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              width: wp(68),
              alignSelf: 'center',
              marginBottom: hp(3),
            }}></View>
          <Drawer.Section style={styles.drawerSection} showDivider={false}>
            <DrawerItem
              label="My Wallet"
              icon={({color, size}) => <Wallet width={wp(5)} height={hp(3)} />}
              labelStyle={styles.subtitle}
              onPress={() => {
                props.navigation.navigate('MyWallet');
              }}
            />
            <DrawerItem
              label="My Chats"
              icon={({color, size}) => <Chat width={wp(5)} height={hp(3)} />}
              labelStyle={styles.subtitle}
              onPress={() => {
                props.navigation.navigate('ChatList');
              }}
            />
            <DrawerItem
              label="History of Rides"
              icon={({color, size}) => <History width={wp(5)} height={hp(3)} />}
              labelStyle={styles.subtitle}
              onPress={() => {
                props.navigation.navigate('History');
              }}
            />
            <DrawerItem
              label="Update Profile"
              icon={({color, size}) => <Update width={wp(5)} height={hp(3)} />}
              labelStyle={styles.subtitle}
              onPress={() => {
                props.navigation.navigate('UpdateProfile');
              }}
            />
            <DrawerItem
              label="Update Password"
              icon={({color, size}) => (
                <Password width={wp(5)} height={hp(3)} />
              )}
              labelStyle={styles.subtitle}
              onPress={() => {
                props.navigation.navigate('UpdatePassword');
              }}
            />
            {/* <DrawerItem
              label="Light Theme"
              icon={({color, size}) => <Theme width={wp(5)} height={hp(3)} />}
              labelStyle={styles.subtitle}
              onPress={() => {
                props.navigation.navigate('LikedItems');
              }}
            /> */}
            <View style={styles.drawerItemContainer}>
              <View style={styles.iconContainer}>
                <Theme width={wp(5)} height={hp(3)} />
              </View>
              <Text style={styles.label}>Light Theme</Text>
              <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color={Colors.Appthemecolor}
              />
            </View>
          </Drawer.Section>
        </View>
        <Drawer.Section style={styles.bottomDrawerSection} showDivider={false}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              flexDirection: 'row',
              borderRadius: wp(3),
              width: wp(60),
              height: hp(6),
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.Appthemecolor,
              marginBottom: hp(1),
            }}>
            <Logout width={wp(5)} height={hp(3)} />
            <Text style={styles.btntext}>Logout</Text>
          </TouchableOpacity>
          <LogoutModal
            modalVisible={modalVisible}
            text={'Logout'}
            btn_text={'Go to Create Profile'}
            subtext={'Are you sure you want to Logout?'}
            type={'single_btn'}
            onPress={() => {
              setModalVisible(false);
            }}
            onPress1={() => {
              setModalVisible(false);
              logout();
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: Colors.AppBckGround_color,
  },
  userInfoSection: {
    //marginTop: hp(3),
    paddingLeft: wp(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  username: {
    fontSize: hp(2),
    marginTop: hp(1.5),
    fontFamily: fontFamily.Nunito_SemiBold,
  },
  useremail: {
    fontSize: hp(1.6),
    // /marginTop: hp(5),
    fontFamily: fontFamily.Nunito_SemiBold,
  },

  drawerSection: {
    marginTop: hp(3),
    marginLeft: wp(3),
  },

  subtitle: {
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_SemiBold,
    color: '#4B4C4F',
  },
  bottomDrawerSection: {
    height: hp(35),
    paddingTop: hp(18),
    backgroundColor: Colors.AppBckGround_color,
  },
  btntext: {
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Bold,
    color: '#4B4C4F',
    marginLeft: wp(2),
  },
  drawerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  label: {
    flex: 1,
    marginLeft: 16,
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_SemiBold,
    color: '#4B4C4F',
  },
});

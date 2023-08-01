import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import SettingsMenu from '../../components/SettingsView/SettingsMenu';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//////////////////ICONS/////////////////
import Icon from 'react-native-vector-icons/Ionicons';

/////////////app fonts///////////
import {fontFamily} from '../../constants/fonts';


//////////svgs//////////////
import Language from "../../assets/svgs/Profile/Language_icon.svg"
import  Notification from "../../assets/svgs/Profile/notification.svg"
import Privacy from "../../assets/svgs/Profile/Shield_icon.svg"
import Terms from "../../assets/svgs/Profile/Document_icon.svg"
import Friends from "../../assets/svgs/Profile/MultipleUser_icon.svg"



const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <CustomHeader
          headerlabel={'Profile'}
          iconPress={() => {
            navigation.goBack();
          }}
          icon={'chevron-back'}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: wp(23),
              height: hp(11),
              borderColor: '#DADADA',
              borderWidth: wp(0.5),
              borderRadius: wp(3),
              marginLeft: wp(8),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name={'person'}
              size={25}
              color={'#DADADA'}
              onPress={() => {}}
            />
          </View>
          <View style={{marginLeft: wp(5)}}>
            <Text
              style={{
                color: 'black',
                fontFamily: fontFamily.Nunito_SemiBold,
                fontWeight: '600',
                fontSize: hp(2),
              }}>
              Manuel H. Smither
            </Text>
            <Text
              style={{
                color: '#7A7C87',
                fontFamily: fontFamily.Nunito_SemiBold,
                fontWeight: '600',
                fontSize: hp(1.8),
              }}>
              (+1) 662-769-1682
            </Text>
          </View>
        </View>
        <View
          style={{marginLeft: wp(5), marginVertical: hp(3), marginTop: hp(5)}}>
          <Text
            style={{
              color: 'black',
              fontFamily: fontFamily.Nunito_Bold,
              fontWeight: '700',
              fontSize: hp(2),
            }}>
            General Settings
          </Text>
        </View>
        <View style={{marginTop: hp(3), marginBottom: hp(2)}}>
          <SettingsMenu
            icon={<Language width={wp(5)} height={hp(3)} />}
            label={'Change Language'}
            labelPress={() => navigation.navigate('ChangeLanguage')}
          />
          <SettingsMenu
            icon={<Notification width={wp(5)} height={hp(3)} />}
            label={'Notifications'}
            //labelPress={() => navigation.navigate('PolicyPrivacy')}
          />
          <SettingsMenu
            icon={<Privacy width={wp(5)} height={hp(3)} />}
            label={'Privacy Policy'}
            labelPress={() => navigation.navigate('PolicyPrivacy')}
          />

          <SettingsMenu
            icon={<Terms width={wp(5)} height={hp(3)} />}
            label={'Terms & Conditions'}
            labelPress={()=>navigation.navigate('TermsCondition')}
          />
          <SettingsMenu
            icon={<Friends width={wp(5)} height={hp(3)} />}
            label={'Invite Friends'}
            labelPress={()=>navigation.navigate('InviteFriends')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
    container:
    {
      flex: 1,
  backgroundColor:'white'
    },
  });
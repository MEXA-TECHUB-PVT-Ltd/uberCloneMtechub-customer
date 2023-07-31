import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

///////iocns///////
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////////app components///////////////
import CustomButtonhere from '../../../components/Button/CustomButton';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///////app fonts//////////////
import {fontFamily} from '../../../constants/fonts';

///////////////app images///////////
import {appImages} from '../../../constants/images';

const InviteFriends = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topview}>
        <Icon
          name={'chevron-back'}
          size={25}
          color={'black'}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:hp(8)}}>
        <Image
          source={appImages.InviteFriends}
          style={{width: wp(40), height: hp(24)}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textview}>
        <Text style={styles.maintext}>Invite Friends</Text>
        <Text style={styles.subtext}>
          Invite your friends to join Uber using your referral code or link.
          When they take their first ride, both you and your friend can enjoy
          exclusive benefits.
        </Text>
      </View>
      <CustomButtonhere
        title={'Invite'}
        widthset={80}
        topDistance={20}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </SafeAreaView>
  );
};

export default InviteFriends;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  topview: {
    paddingHorizontal: wp(2.5),
    marginTop: hp(4),
    marginBottom: hp(0),
  },
  textview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    color: '#000',
    fontSize: hp(2.5),
    fontFamily: fontFamily.Nunito_Bold,
    width:wp(40),
    marginVertical:hp(3)
  },
  subtext: {
    color: '#7A7C87',
    fontSize: hp(1.68),
    fontFamily: fontFamily.Nunito_Medium,
    width:wp(75),
    textAlign:'center',
    letterSpacing:0.6
  },
});

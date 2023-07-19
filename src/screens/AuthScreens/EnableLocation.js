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
import CustomButtonhere from '../../components/Button/CustomButton';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

///////app fonts//////////////
import {fontFamily} from '../../constants/fonts';

///////////////app images///////////
import {appImages} from '../../constants/images';

const EnableLocation = ({navigation}) => {
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

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: hp(8),
        }}>
        <Image
          source={appImages.EnableLocation}
          style={{width: wp(80), height: hp(35)}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textview}>
        <Text style={styles.maintext}>Enable Your Location</Text>
        <Text style={styles.subtext}>
          To provide you with the best and most accurate Uber experience, we
          need access to your device's location.
        </Text>
      </View>
      <CustomButtonhere
        title={'Use my Location'}
        widthset={80}
        topDistance={10}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <View style={{marginTop:hp(15),alignItems:'center',justifyContent:'center'}}>
      <Text style={styles.endtext}>
      Skip for now
      </Text>
      </View>

    </SafeAreaView>
  );
};

export default EnableLocation;
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
    width: wp(60),
    marginVertical: hp(3),
    textAlign:'center'
  },
  subtext: {
    color: '#939598',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Medium,
    width: wp(75),
    textAlign: 'center',
  },
  endtext: {
    color: '#000',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Bold,
  },
});

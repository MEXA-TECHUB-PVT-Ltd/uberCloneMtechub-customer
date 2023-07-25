import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
} from 'react-native';

//////height and width////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';
import {fontFamily} from '../../constants/fonts';

const OnboardingComponents = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={props.image}
          style={{width: wp(80), height: hp(40)}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:hp(3)}}>
        <Text style={styles.maintext}>{props.maintext}</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.subtext}>{props.subtext}</Text>
      </View>
    </SafeAreaView>
  );
};
export default OnboardingComponents;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  maintext: {
    color: Colors.MainTextColor,
    fontSize: hp(2.5),
    fontFamily: fontFamily.Nunito_Bold,
    fontWeight: '700',
    width: wp(90),
    textAlign: 'center',
    lineHeight: hp(3),
    marginBottom: hp(2),
  },
  subtext: {
    color: Colors.SubTextColor,
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Light,
    fontWeight: '500',
    width: wp(75),
    textAlign: 'center',
    lineHeight: hp(2.5),
  },
});

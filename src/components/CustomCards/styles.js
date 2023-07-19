import React from 'react';
import {StyleSheet} from 'react-native';

////////////////colors///////////////////
import Colors from '../../utils/Colors';

////height and width//////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//////////////////app fonts////////////////////
import {fontFamily} from '../../constants/fonts';

const styles = StyleSheet.create({
  mainview: {
    //flexDirection: 'row',
    marginTop: wp(5),
    marginBottom: wp(2),
    width: wp(92),
    //height: wp(58),
    alignSelf: 'center',
    borderRadius: wp(5),
    paddingVertical: hp(2),
    borderColor: '#F2F2F2',
    borderWidth: wp(0.3),
  },
  logo: {
    height: wp(16),
    width: wp(13),
  },
  maintext: {
    color: '#AAAAAA',
    fontFamily: fontFamily.Nunito_Medium,
    fontSize: hp(1.8),
    marginBottom:hp(1)
    //fontWeight: '700',
  },
  subtext: {
    color: '#121212',
    fontFamily: fontFamily.Nunito_SemiBold,
    fontSize: hp(1.8),
    width:wp(65)
    //fontWeight: '700',
  },

  notimaintext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(1.8),
    //fontWeight: '700',
  },

  notisubtext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: hp(1.5),
    //fontWeight: '400',
  },
  notitimetext: {
    color: '#979797',
    fontFamily: fontFamily.Nunito_SemiBold,
    fontSize: hp(1.3),
  },
  lineview: {
    width: wp(90),
    flexDirection: 'row',
    marginTop: hp(1),
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 0.8,
    alignSelf: 'center',
  },
  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical:hp(2),
    width:wp(83),
    alignSelf:'center'
  },
  dottedLine: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    height: hp(6),
    borderColor: 'black',
  },

  pricetext: {
    color: Colors.Appthemecolor,
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(2),
    textAlign:'right'
  },
kmtext: {
    color: '#AAAAAA',
    fontFamily: fontFamily.Nunito_Light,
    fontSize: hp(1.6),
    textAlign:'right'
  },
});
export default styles;

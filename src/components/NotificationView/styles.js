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
    flexDirection: 'row',
    marginTop: wp(5),
    marginBottom: wp(2),
    width: wp(88),
    //height: wp(18),
    alignSelf: 'center',
    borderRadius: wp(3),
    paddingVertical: hp(1),
    paddingLeft: wp(2),
    borderColor: '#F2F2F2',
    borderWidth: wp(0.3),
    // borderWidth: wp(0.3),
  },
  logo: {
    height: wp(16),
    width: wp(15),
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
});
export default styles;

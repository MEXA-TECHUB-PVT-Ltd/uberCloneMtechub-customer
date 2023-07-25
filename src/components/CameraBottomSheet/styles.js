import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

////////app color///////////
import Colors from '../../utils/Colors';

///////height ad width/.///////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////////app fonts//////////////////
import {fontFamily} from '../../constants/fonts';

const styles = StyleSheet.create({
  bottomtext: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: hp(3),
  },
  optiontext: {
    fontSize: hp(1.7),
    color: 'black',
    fontFamily: fontFamily.Nunito_SemiBold,
    marginLeft: wp(4),
  },
  maintext: {
    fontSize: hp(2),
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
  },
  modaltextview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(70),
    height:hp(6),
    borderRadius: wp(3),
    backgroundColor: Colors.Appthemecolor,
    paddingHorizontal: wp(15),
  },
});
export default styles;

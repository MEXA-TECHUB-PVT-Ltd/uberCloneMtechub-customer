import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

////////////////colors///////////
import Colors from '../../utils/Colors';

/////////height and width////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////app fonts////////////
import { fontFamily } from '../../constants/fonts';

const Authstyles = StyleSheet.create({
  textview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(5),
    marginHorizontal: wp(8),
  },
  maintext: {
    color: Colors.MainTextColor,
    fontSize: hp(2.5),
    fontFamily: fontFamily.Nunito_Bold,
    width: wp(90),
    textAlign: 'center',
    lineHeight: hp(3),
    marginBottom: hp(2),
  },
  subtext: {
    color: Colors.SubTextColor,
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_SemiBold,
    width: wp(75),
    textAlign: 'center',
    lineHeight: hp(2.5),
  },
  textinput_title: {
    color: Colors.App_white_color,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: hp(1.6),
  },
  horizontal_mainview:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(8),
    marginBottom: hp(4),
    marginTop: hp(4),
  },
    horizontal_line:
    {
      flex: 0.8,
      borderWidth: 0.25,
      borderColor: '#FFFFFF',
    },
    horizontal_text:
      {
        width: wp(8),
        textAlign: "center",
        color: Colors.App_auth_subtext,
        fontFamily: fontFamily.Poppins_Regular,
        fontSize:hp(1.6)
      },
      last_text:
      {
        fontFamily:fontFamily.Poppins_Regular,
        color:'#FFFFFF',
        fontSize:hp(1.4)
      },
      blacktext:
      {
        color:'black',
        fontSize:hp(1.8),
        fontFamily:fontFamily.Nunito_SemiBold
      },
      themecolortext:
      {
        color:Colors.Appthemecolor,
        fontSize:hp(1.8),
        fontFamily:fontFamily.Nunito_Bold
      }
});
export default Authstyles;

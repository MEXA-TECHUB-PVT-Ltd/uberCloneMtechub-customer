import React from 'react';
import {
  StyleSheet,
} from 'react-native';

///////////////colors////////
import Colors from '../../utils/Colors';

////////height and width///////////////
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';
import { fontFamily } from '../../constants/fonts';

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
backgroundColor:'white'
  },
  btntext: {
    color: 'black',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Medium,
    // fontWeight: '500',
  },
  balancetext:{
    color:'#7A7C87',
    fontFamily:fontFamily.Nunito_Medium,
    fontSize:hp(1.8)
  },
  pricetext:{
    color:'#000',
    fontFamily:fontFamily.Nunito_SemiBold,
    fontSize:hp(2)
  },


  ///////////////coditions/////////
  sub_text: {
    fontFamily: fontFamily.Nunito_SemiBold,
    color: '#7A7C87',
    fontSize: hp(1.5),
  },


  ////////////////pricay policy////////////
  heading_text: {
    fontFamily: fontFamily.Nunito_Bold,
    color: '#000',
    fontSize: hp(2),
  },
  
});
export default styles;

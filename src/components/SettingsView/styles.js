import React from 'react';
import {
  StyleSheet,
} from 'react-native';

///colors/////////////
import Colors from '../../utils/Colors';

////height and width///////////
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
  from 'react-native-responsive-screen';

  //////////////////app fonts////////////////////
  import { fontFamily } from '../../constants/fonts';

const styles = StyleSheet.create({

  mainview: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:"white",
    width: wp(95),
    height: wp(12),
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal:wp(3),
    marginVertical:hp(0.5)
  },

  labeltext:
  {
    color: '#4B4C4F',
fontFamily:fontFamily.Nunito_SemiBold,
    fontSize: hp(1.7),
    marginLeft:wp(3),
  },


});
export default styles;

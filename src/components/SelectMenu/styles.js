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
    color: '#000',
fontFamily:fontFamily.Nunito_Medium,
    fontSize: hp(1.7),
    fontWeight:'600'
  },


});
export default styles;

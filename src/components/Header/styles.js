import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

///////colors////////////////////
import Colors from '../../utils/Colors';

////////height and width/////////////////////
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////app fonts//////////////////
import {fontFamily} from '../../constants/fonts';

const styles = StyleSheet.create({
  //Header
  headerView: {
    flexDirection: 'row',
    backgroundColor:"white",
    height: Height * 0.09,
    width: wp(100),
    paddingHorizontal: wp(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor:'green',
    alignSelf:'center'
  },
  lefticonview: {
    justifyContent: 'center',
    marginLeft: wp(2),
    width:wp(10),
    //backgroundColor:'yellow'
  },
  righticonview: {
    justifyContent: 'center',
    marginRight: wp(0),
    width:wp(20),
    //backgroundColor:'yellow'
  },
  labelView: {
    marginHorizontal: wp(0),
    flexDirection: 'column',
    width: wp(60),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(5),
    //backgroundColor:'red',
    alignSelf:'center'
  },
  logo: {
    height: wp(16),
    width: wp(16),
  },

  label: {
    color: 'black',
    fontSize: hp(2.5),
    fontFamily: fontFamily.Nunito_Bold,
    textAlign: 'center',
  },
});

export default styles;

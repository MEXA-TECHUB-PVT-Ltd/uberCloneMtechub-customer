import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

//////colors/////////////////
import Colors from '../../../utils/Colors';

/////height and width////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////////app fonts/////////////
import {fontFamily} from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 10,
    height: hp(75),
    width: wp(100),
    zIndex: 10,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  lastView: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    left: 0,
    right: 0,
    //height:hp(45),
    //width:wp(100),
    //backgroundColor:'white',
  },
  marker: {
    width: 30,
    height: 30,
  },

  toptext: {
    color: 'black',
    marginLeft: wp(5),
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Medium,
    fontWeight: '500',
  },
  bottommaintext: {
    color: 'black',
    marginLeft: wp(5),
    fontSize: hp(2),
    fontFamily: fontFamily.Nunito_Bold,
    fontWeight: '700',
  },
  btntext: {
    color: 'black',
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_SemiBold,
  },
  /////////////////route/////////////////
  container1: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: hp(90),
    //position:'absolute',
    //backgroundColor:'white'
  },


  /////////////////ongoing///////////////
  username:{
    color:"black",
    fontSize:hp(1.9),
    fontFamily:fontFamily.Nunito_Bold

  },
  numberplate:{
    color:"#8E8D8A",
    fontSize:hp(1.7),
    fontFamily:fontFamily.Nunito_SemiBold
  },
  line: {
    width: wp(0.2),
    height: hp(5.2),
    backgroundColor: 'rgba(0, 0, 0, 0.21)',
  },
});
export default styles;

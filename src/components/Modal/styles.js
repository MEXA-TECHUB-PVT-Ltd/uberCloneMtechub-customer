import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

/////////////colors//////////
import Colors from '../../utils/Colors';

////////////height and width////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//////////////////app fonts////////////////
import {fontFamily} from '../../constants/fonts';

const styles = StyleSheet.create({
  centeredView: {
    zIndex: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    width: wp(92),
    paddingTop: wp(5),
    paddingHorizontal: wp(2),
    backgroundColor: 'white',
    borderRadius: wp(5),
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modaltext: {
    fontSize: hp(2),
    color: '#303030',
    fontFamily: fontFamily.Poppins_Regular,
    textAlign: 'center',
    width: wp(70),
  },
  modalsubtext: {
    fontSize: hp(2),
    fontWeight: '400',
    color: '#535353',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  ApprovedView: {
    height: hp(6),
    width: wp(33),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(2.5),
    marginHorizontal: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //////////////////ratting////////////////
  notimaintext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(1.8),
  },

  subtext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: hp(1.6),
    textAlign: 'center',
    width: wp(70),
    marginTop: hp(1),
  },
  headingtext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(2.3),
    textAlign: 'center',
  },

  notisubtext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: hp(1.5),
    //fontWeight: '400',
  },

  leftbtntext: {
    textAlign: 'left',
    color: '#6B6B6B',
    fontSize: hp(2),
    fontFamily: fontFamily.Poppins_Regular,
  },
  rightbtntext: {
    textAlign: 'left',
    color: Colors.Appthemecolor,
    fontSize: hp(2),
    fontFamily: fontFamily.Nunito_Bold,
  },

  destinationsubtext: {
    fontSize: hp(1.6),
    color: '#A7A9AC',
    fontFamily: fontFamily.Nunito_SemiBold,
    textAlign: 'center',
    width: wp(60),
  },
  destinationmaintext: {
    fontSize: hp(2.2),
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
    textAlign: 'center',
    width: wp(50),
  },
  destinationiconstyle: {
    height: hp(20),
    width: wp(50),
  },
  destinationbtntext: {
    fontSize: hp(2),
    color: 'black',
    fontFamily: fontFamily.Poppins_SemiBold,
    textAlign: 'center',
  },

  ////////////////////rejected modal////////////////////
  toptext: {
    fontSize: hp(2),
    color: Colors.Appthemecolor,
    fontFamily: fontFamily.Poppins_SemiBold,
    marginLeft: wp(4),
  },
  mainview: {
    flexDirection: 'row',
    marginTop: wp(5),
    marginBottom: wp(2),
    justifyContent: 'center',
    backgroundColor: Colors.appinputscolor,
    width: wp(70),
    height: wp(15),
    alignSelf: 'center',
    borderRadius: wp(5),
    paddingLeft: wp(2),
    alignItems: 'center',
  },

  labeltext: {
    color: '#303030',
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: hp(1.7),
  },

  ///////////////time selector//////////////
  card: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
    width: wp(50),
    marginHorizontal: wp(5),
    alignItems: 'center',
  },
  cardtext: {
    color: 'black',
    marginBottom: hp(2),
    marginTop: hp(2),
    fontFamily: 'Poppins',
    fontSize: hp(2),
    color: 'grey',
  },

  ///////////////logout modal///////////////////
  logoutheadingtext: {
    color: 'black',
    fontSize: hp(2.5),
    fontFamily: fontFamily.Nunito_Bold,
  },
  logoutsubtext: {
    color: '#A7A9AC',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_SemiBold,
  },
  btnmainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
marginBottom:hp(3)
  },
  btn: {
    width: wp(32),
    backgroundColor:'#E2E9EC',
    borderRadius: wp(3),
    height: hp(5),
    alignItems:'center',
    justifyContent:'center'
  },
  btntext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_SemiBold,
    fontSize: hp(1.8),
  },
});
export default styles;

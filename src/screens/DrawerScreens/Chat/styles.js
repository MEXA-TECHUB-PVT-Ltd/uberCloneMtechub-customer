import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/////////////app colors/////////////
import Colors from '../../../utils/Colors';

////////////////app fonts///////////
import {fontFamily} from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: Colors.AppBckGround_color,
    paddingHorizontal: wp(0),
  },

  postcard: {
    paddingVertical: 15,
    //marginVertical: 10,
    // alignSelf:"center",
    marginTop: wp('3%'),
    height: hp('78%'),
  },
  messageContainer: {
    backgroundColor: 'rgba(228, 228, 228, 1)',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 12,
    margin: wp('1.5%'),
    borderTopRightRadius: 0,
  },
  messageContainerleft: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 151, 39, 0.23)',
    maxWidth: '80%',
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 0,
    padding: 10,
    paddingBottom: 12,
    margin: wp('1.5%'),
    borderTopLeftRadius: 0,
  },
  messageView: {
    backgroundColor: 'transparent',
    maxWidth: '80%',
  },
  timeView: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    paddingLeft: 10,
  },
  message: {
    color: 'rgba(45, 62, 80, 1)',
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  time: {
    color: 'rgba(45, 62, 80, 1)',
    alignSelf: 'flex-end',
    fontSize: 10,
  },

  ///////////////////Chatlist////////////

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: wp(2),
    padding: hp(0.5),
    width: wp(94),
    alignSelf: 'center',
    borderRadius: wp(3),
  },
  user_name_txt: {
    fontSize: hp(2),
    fontFamily: fontFamily.Nunito_Bold,
    color: 'black',
  },
  detailtxt: {
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Light,
    width: wp(70),
    marginTop: hp(1),
    color: '#BEC2CE',
    //backgroundColor:'red'
  },
  timetxt: {
    width: wp(20),
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Medium,
    color: '#343937',
    textAlign: 'right',
    marginTop: hp(1),
  },
  line: {
    borderBottomColor: '#F1F2F6',
    borderBottomWidth: wp(0.3),
    width: wp(71),
    marginLeft: wp(23),
    //alignSelf:'flex-end'
  },

  /////////////////chat bubble/////////
  bubblecontainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: wp(0.5),
    marginVertical: hp(0.1),
  },
  containerCurrentUser: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  messageContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
    maxWidth: '80%', // Adjust this to limit the message width as per your design
    borderRadius: 16,
    position: 'relative',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  timeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 8,
  },
  timeText: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
  },
  leftBubble: {
    backgroundColor: '#F4F8FC',
  },
  rightBubble: {
    backgroundColor: Colors.Appthemecolor,
  },
  triangleLeft: {
    position: 'absolute',
    left: -8,
    bottom: -8,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderTopColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: '#F4F8FC',
    borderBottomWidth: 8,
    borderBottomColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: 'transparent',
  },
  triangleRight: {
    position: 'absolute',
    right: -8,
    bottom: -8,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderTopColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: Colors.Appthemecolor,
    borderBottomWidth: 8,
    borderBottomColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: 'transparent',
  },
});
export default styles;

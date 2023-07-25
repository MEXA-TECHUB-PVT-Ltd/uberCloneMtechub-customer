import React from 'react';
import {StyleSheet
} from 'react-native';

////colors///////
import Colors from '../../utils/Colors';

//////////HEIGHT AND WIDTH////////////
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

///////FONTS/////////////
import { fontFamily } from '../../constants/fonts';

const styles = StyleSheet.create({
    container:
    {
alignSelf:'center',
//position:'absolute',
//bottom:hp(6)
//top:hp(15)
    },
buttoncontent:
{
    height: hp(6.3),
    backgroundColor:Colors.Appthemecolor,
    padding:0,
    color:Colors.Appthemecolor
},
button:
{
    borderRadius:wp(2.5),
    height: hp(6.3),
    alignItems:'center',
    backgroundColor:Colors.Appthemecolor,
},
header__icon: {
    alignSelf:'flex-end',
    color:'black',
},
label:
{
    color:'black',
    fontSize: hp(1.8) ,
    backgroundColor:Colors.Appthemecolor,
    fontFamily:fontFamily.Nunito_SemiBold,
   textAlign:'center',
},

  });
  export default styles;
  
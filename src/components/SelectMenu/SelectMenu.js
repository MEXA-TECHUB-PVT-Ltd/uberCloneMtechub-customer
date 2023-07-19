import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

//////////////////app styles//////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../../utils/Colors';

const SelectMenu = ({label, menuPress, icon, selected,type}) => {
  return (
    <TouchableOpacity
      style={{
        //borderWidth: wp(0.3),
        //boarderColor: '#F6F6F7',
        height: hp(10),
        width: wp(26),
        borderRadius: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:selected === true && type=== 'payment'?wp(0.5):null,
        borderColor:selected === true && type=== 'payment'?Colors.Appthemecolor:null,
        backgroundColor: selected === true && type=== 'payment'?'white' :selected === true ? Colors.Appthemecolor : '#F6F6F7',
      }}
      onPress={menuPress}>
      {icon}
      <Text style={[styles.labeltext,{color:selected === true ? "black" : '#979797'}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SelectMenu;

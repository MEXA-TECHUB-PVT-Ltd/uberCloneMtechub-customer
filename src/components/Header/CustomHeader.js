import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from 'react-native';

//////////////////ICONS/////////////////
import Icon from 'react-native-vector-icons/Ionicons';

///////STYLES////////////////////////
import styles from './styles';

/////////HEIGHT AND WIDTH/////////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//////////svg////////////
import Cancle from  '../../assets/svgs/cancle.svg'

const CustomHeader = ({
  navigation,
  headerlabel,
  iconPress,
  icon,
  onpresseacrh,
  type,
  searchicon,
}) => {
  return (
    <View style={[styles.headerView]}>
      <View style={styles.lefticonview}>
        <Icon name={icon} size={25} color={'black'} onPress={iconPress} />
      </View>
      <View
        style={[
          styles.labelView,
          {marginTop: type === 'crypto' ? hp(2) : hp(0)},
        ]}>
        <Text style={styles.label}>{headerlabel}</Text>
      </View>

      <TouchableOpacity style={styles.righticonview}
      onPress={onpresseacrh}
      >
        {searchicon}
        {/* <Icon
          name={searchicon}
          size={25}
          color={'white'}
          onPress={onpresseacrh}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

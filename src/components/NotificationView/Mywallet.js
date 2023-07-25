import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

//////////////////app styles//////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//////////////app images/////////
import {appImages} from '../../constants/images';

import { Avatar } from 'react-native-paper';
import { fontFamily } from '../../constants/fonts';

const MyWalletCard = ({
  navigation,
  notitext,
  notitime,
  labelPress,
  icon,
  notiicon,
  notisubtext,
}) => {
    console.log("here props",notitext)
  return (
    <View>
      <TouchableOpacity onPress={labelPress} style={[styles.mainview,{alignItems:'center'}]}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(0),
            width: wp(70),
            alignItems:'center'
          }}>
          {/* <Image
            source={appImages.GoogleLogo}
            style={styles.logo}
            resizeMode="contain"
          /> */}
            <Avatar.Icon size={hp(7)} style={{backgroundColor:"#E7E7E7"}} 
             //source={appImages.GoogleLogo}
             />
          <View style={{marginLeft: wp(3), justifyContent: 'center'}}>
            <Text style={styles.notimaintext}>{notitext}</Text>
            <Text style={styles.notisubtext}>{notisubtext}</Text>
          </View>
        </View>
        <Text style={[styles.notimaintext,{fontFamily:fontFamily.Nunito_Bold}]}>{notitime}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyWalletCard;

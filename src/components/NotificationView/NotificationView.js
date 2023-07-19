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

////////////////app redux///////////
import {useSelector} from 'react-redux';

const NotificationView = ({
  navigation,
  notitext,
  notitime,
  labelPress,
  icon,
  notiicon,
  notisubtext,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={labelPress} style={styles.mainview}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(0),
            width: wp(70),
          }}>
          <Image
            source={appImages.GoogleLogo}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={{marginLeft: wp(3), justifyContent: 'center'}}>
            <Text style={styles.notimaintext}>{notitext}</Text>
            <Text style={styles.notisubtext}>{notisubtext}</Text>
          </View>
        </View>
        <Text style={styles.notitimetext}>{notitime}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationView;

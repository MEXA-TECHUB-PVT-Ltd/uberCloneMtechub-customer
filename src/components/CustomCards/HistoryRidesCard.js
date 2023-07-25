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

//////////////components/////////
import VerticalLine from '../VerticleLine/VerticleLine';

//////////////////app styles//////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//////////////app images/////////
import {appImages} from '../../constants/images';

/////////////paper///////////
import {Avatar} from 'react-native-paper';

/////////////app fonts/////////////
import {fontFamily} from '../../constants/fonts';

////////////svgs///////////////
import LocationStart from '../../assets/svgs/Starting_icon.svg';
import LocationIcon from '../../assets/svgs/Location_icon.svg';

const HistoryRidesCard = ({
  navigation,
  notitext,
  notitime,
  cardPress,
  icon,
  notiicon,
  notisubtext,
  km,
  type
}) => {
  console.log('here props', notitext);
  return (
    <View>
      <TouchableOpacity onPress={cardPress} style={[styles.mainview]} activeOpacity={type != "detail"?0:1}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: wp(4.5),
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LocationStart width={wp(8)} height={hp(5)} />
            <View style={styles.dottedLine} />
            <LocationIcon width={wp(9)} height={hp(5)} />
          </View>
          <View style={{height: hp(15), marginLeft: wp(2)}}>
            <Text style={styles.maintext}>Pickup point</Text>
            <Text style={styles.subtext} numberOfLines={2}>
              Cibadak, Sukabumi
            </Text>
            <Text style={[styles.maintext, {marginTop: hp(2.5)}]}>
              Pickout point
            </Text>
            <Text style={[styles.subtext]} numberOfLines={2}>
              Cisaat selatan, Sukabumi
            </Text>
          </View>
        </View>
        {type != "detail"?
        <View style={styles.line} />:null}
        {type != "detail"?
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: wp(4.5),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: hp(0),
                    width: wp(68),
                    alignItems: 'center',
                  }}>
                  {/* <Image
                  source={appImages.GoogleLogo}
                  style={styles.logo}
                  resizeMode="contain"
                /> */}
                  <Avatar.Icon
                    size={hp(5.5)}
                    style={{backgroundColor: '#E7E7E7'}}
                    //source={appImages.GoogleLogo}
                  />
                  <View style={{marginLeft: wp(3), justifyContent: 'center'}}>
                    <Text style={styles.notimaintext}>{notitext}</Text>
                    <Text style={styles.notisubtext}>{notisubtext}</Text>
                  </View>
                </View>
                <View style={{marginRight:wp(3)}}>
                  <Text style={[styles.pricetext]}>{notitime}</Text>
                  <Text style={[styles.kmtext]}>{km}</Text>
                </View>
              </View>:null
        }


      </TouchableOpacity>
    </View>
  );
};

export default HistoryRidesCard;

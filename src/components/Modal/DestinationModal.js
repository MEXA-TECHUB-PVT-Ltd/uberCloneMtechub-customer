import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';

import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/////////////////app images/////////////////////
import {appImages} from '../../constants/images';
import Colors from '../../utils/Colors';

const DestinationModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {alignItems: 'center', width: wp(85)}]}>
          <Image
            source={appImages.Map}
            style={styles.destinationiconstyle}
            resizeMode="contain"
          />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(2),
              marginTop: hp(3),
              alignSelf: 'center',
            }}>
            <Text style={styles.destinationmaintext} numberOfLines={3}>
              {props.text}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(2),
              alignSelf: 'center',
            }}>
            <Text style={styles.destinationsubtext} numberOfLines={3}>
              {props.subtext}
            </Text>
          </View>
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              backgroundColor: Colors.Appthemecolor,
              width: wp(65),
              height: hp(6),
              borderRadius: wp(5),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.destinationbtntext}>Give Review</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.CloseModal}
            style={{marginBottom: hp(2), marginTop: hp(2)}}>
            <Text style={styles.destinationsubtext}>No, Thanks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DestinationModal;

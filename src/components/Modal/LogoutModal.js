import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';

import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////colors//////////////////
import Colors from '../../utils/Colors';

const LogoutModal = props => {
  return (
    // <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView,{width:wp(82)}]}>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(3),
              alignSelf: 'center',
              marginTop:hp(2)
            }}>
            <Text style={styles.logoutheadingtext}>{props.text}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(5),
              alignSelf: 'center',
            }}>
            <Text style={styles.logoutsubtext}>{props.subtext}</Text>
          </View>

          <View style={styles.btnmainview}>
            <TouchableOpacity onPress={props.onPress} style={styles.btn}>
              <Text style={[styles.btntext]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onPress1}
              style={[styles.btn, {backgroundColor: Colors.Appthemecolor}]}>
              <Text style={styles.btntext}>Yes, Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    // </View>
  );
};

export default LogoutModal;

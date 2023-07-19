import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import Lottie from 'lottie-react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const LottieModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={props.onPress}>
            <View
              style={{
                height: heightPercentageToDP(20),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Lottie
                source={require('./Findingdriver.json')}
                autoPlay
                style={styles.animatedIcon}
              />
            </View>
          </TouchableOpacity>

          <View style={{marginBottom: heightPercentageToDP(5)}}>
            <Text style={styles.modaltext}>{props.text} </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LottieModal;

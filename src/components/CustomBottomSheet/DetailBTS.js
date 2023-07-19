import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Snackbar} from 'react-native-paper';

//////////////////app components///////////////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';

////////////app icons////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

///////////////app packages/////////////
import RBSheet from 'react-native-raw-bottom-sheet';

///////////////app styles//////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

////////colors//////////
import Colors from '../../utils/Colors';

const DetailBottomSheet = props => {
  const navigation = useNavigation();

  ////////////////textinput state//////////////
  const [description, setDescription] = useState('');

  ///////////////button states/////////////
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
  const onDismissSnackBar = () => setVisible(false);

  ///////////////data states////////////////////
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //password eye function and states
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <RBSheet
      //sstyle={{flex:1}}
      ref={props.refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      openDuration={50}
      closeDuration={50}
      animationType="fade"
      //height={500}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
        },
        draggableIcon: {
          backgroundColor: 'white',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: hp(40),
        },
      }}>
      <View style={{paddingHorizontal: wp(8)}}>
        <CustomTextInput
          type={'iconinput'}
          term={email}
          placeholder="example..."
          view_widthset={85}
          textinput_widthset={75}
          onTermChange={newPassword => setPassword(newPassword)}
          // mode={'password'}
          secureTextEntry={data.secureTextEntry ? true : false}
          onclick={() => updateSecureTextEntry()}
          PlaceholderText={'UserName'}
        />
        <CustomTextInput
          type={'iconinput'}
          term={email}
          //placeholder="Password"
          view_widthset={85}
          textinput_widthset={67}
          onTermChange={newPassword => setPassword(newPassword)}
          mode={'password'}
          secureTextEntry={data.secureTextEntry ? true : false}
          onclick={() => updateSecureTextEntry()}
          PlaceholderText={'Email Address'}
        />
      </View>

      <CustomButtonhere
        title={'Continue'}
        widthset={85}
        topDistance={5}
        loading={loading}
        disabled={disable}
        onPress={props.onpress}
      />

      <Snackbar
        duration={400}
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{
          backgroundColor: snackbarValue.color,
          marginBottom: hp(9),
          zIndex: 999,
        }}>
        {snackbarValue.value}
      </Snackbar>
    </RBSheet>
  );
};

export default DetailBottomSheet;

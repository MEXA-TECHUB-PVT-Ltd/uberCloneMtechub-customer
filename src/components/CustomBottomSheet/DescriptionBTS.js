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

const DescriptionBottomSheet = props => {
  const navigation = useNavigation();

  ////////////////textinput state//////////////
  const [description, setDescription] = useState('');
  const [data, setData] = useState({}); 

  ///////////////button states/////////////
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
  const onDismissSnackBar = () => setVisible(false);

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: wp(7),
        }}>
        <Text style={styles.maintext}>{props.title}</Text>
        {/* <TouchableOpacity onPress={() => props.refRBSheet.current.close()}>
          <Ionicons
            name={"close"}
            size={22}
            color={Colors.Appthemecolor}
            onPress={() => props.refRBSheet.current.close()}
          />
        </TouchableOpacity> */}
      </View>

    <View style={{paddingHorizontal:wp(8),marginTop:hp(2)}}>
    <CustomTextInput
        type={'withouticoninput'} 
        texterror={'invalid'}
        view_widthset={85}
        textinput_widthset={67}
        mutilenght={13}
        term={description}
        multiline={true}
        onTermChange={desc => setDescription(desc)}
        from={'report'}
        PlaceholderText={"Username"}
        focus={"true"}
        
      />
    </View>
 

      <CustomButtonhere
        title={'Submit'}
        widthset={80}
        topDistance={3}
        loading={loading}
        disabled={disable}
        onPress={() => {
          props.onpress()
          //navigation.navigate("Drawerroute");
    
        }}
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

export default DescriptionBottomSheet;

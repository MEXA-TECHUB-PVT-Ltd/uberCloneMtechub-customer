import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import CustomButtonhere from '../../components/Button/CustomButton';

//////////////////ICONS/////////////////
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

const UpdateProfile = ({navigation}) => {
  /////////////data states/////////////
  const [username, setUsername] = useState('John Doe');
  const [phoneNo, setPhoneNo] = useState('0000-0000000');
  const [email, setEmail] = useState('JohnDoe@gmail.com');

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: wp(8)}]}>
      <CustomHeader
        headerlabel={'Update Profile'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />

        <View
          style={{
            width: wp(24),
            height: hp(11),
            borderColor: '#E2E9EC',
            borderWidth: wp(0.5),
            borderRadius: wp(3),
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center'
          }}>
          <Icon name={'person'} size={30} color={'#E2E9EC'} onPress={() => {}} />
    
        </View>
        <View style={{backgroundColor:Colors.Appthemecolor,alignItems:'center',justifyContent:'center',width:wp(30),alignSelf:'center',height:hp(4),borderRadius:wp(2),marginTop:hp(2)}}>

            <Text style={{color:'black'}}>Add Image</Text>
        </View>
      <CustomTextInput
        type={'withouticoninput'}
        term={username}
        view_widthset={85}
        textinput_widthset={67}
        placeholder="Password"
        onTermChange={text => setUsername(text)}
        PlaceholderText={'Username'}
        focus={"true"}
      />

      <CustomTextInput
        type={'withouticoninput'}
        term={phoneNo}
        view_widthset={85}
        textinput_widthset={67}
        placeholder="Password"
        onTermChange={text => setPhoneNo(text)}
        PlaceholderText={'Phone Number'}
        focus={"true"}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={email}
        view_widthset={85}
        textinput_widthset={67}
        placeholder="Password"
        onTermChange={text => setEmail(text)}
        PlaceholderText={'Email Address'}
        focus={"true"}
      />
            <CustomButtonhere
        title={'Update'}
        widthset={80}
        topDistance={23}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('WelcomeScreen');
        }}
      />
    </SafeAreaView>
  );
};

export default UpdateProfile;

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

/////////////components//////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomTextInput from '../../components/TextInput/CustomTextInput';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////colors////////////
import Colors from '../../utils/Colors';

///app images////////////
import {appImages} from '../../constants/images';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

////////////////app styles/////////
import Authstyles from '../styles/Authstyles';
import {fontFamily} from '../../constants/fonts';

const ResetPassword = ({navigation}) => {
  ///////////////data states////////////////////
  const [password, setPassword] = React.useState('');
  const [confirm_password, setConfirmPassword] = React.useState('');

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
    <SafeAreaView style={styles.container}>                
      <View style={{marginTop: hp(5)}}>
        <Ionicons
          name="chevron-back"
          color={'#000'}
          size={hp(3.5)}
          onPress={{}}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          marginTop: hp(5),
        }}>
        <Text style={[Authstyles.maintext, {textAlign: 'left'}]}>
        Reset Password
        </Text>
      </View>
      <View style={{justifyContent: 'center', marginBottom: hp(8)}}>
        <Text style={[Authstyles.subtext, {textAlign: 'left', width: wp(80)}]}>
        Please sign in to access your account and continue your seamless Uber experience.
        </Text>
      </View>

      <CustomTextInput
        icon={appImages.lock}
        type={'withouticoninput'}
        term={password}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={text => setPassword(text)}
        mode={'password'}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'New Password*'}
      />
     <CustomTextInput
        icon={appImages.lock}
        type={'withouticoninput'}
        term={confirm_password}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={text => setConfirmPassword(text)}
        mode={'password'}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'Confirm Password*'}
      />
      <CustomButtonhere
        title={'Reset'}
        widthset={80}
        topDistance={10 }
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />

    </SafeAreaView>
  );
};
export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(8),
  },
  //////////////////signin//////////////////
  forgettextview: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems:'flex-end',
    marginTop: hp(0),
    width: wp(40),
  },
  forgettext: {
    color:"#000",
    fontSize: hp(1.7),
    marginBottom: wp('8%'),
    marginRight: wp(0),
    fontFamily: fontFamily.Nunito_Bold,
    fontWeight:'700'
  },
});

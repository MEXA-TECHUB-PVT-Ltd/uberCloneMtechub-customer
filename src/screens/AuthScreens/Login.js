import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

//////////paper components//////////////////
import {Checkbox} from 'react-native-paper';

/////////////components//////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import IconButton from '../../components/Button/IconButton';

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

///////////app fonts///////////////
import {fontFamily} from '../../constants/fonts';

//////signin/////////
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
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

  /////check box////////////////
  const [checked, setChecked] = React.useState(false);
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
          Welcome to Uber Replica
        </Text>
      </View>
      <View style={{justifyContent: 'center', marginBottom: hp(8)}}>
        <Text style={[Authstyles.subtext, {textAlign: 'left', width: wp(80)}]}>
          Please sign in to access your account and continue your seamless Uber
          experience.
        </Text>
      </View>
      <CustomTextInput
        type={'withouticoninput'}
        term={email}
        view_widthset={85}
        textinput_widthset={75}
        onTermChange={text => setEmail(text)}
        PlaceholderText={'Phone Number*'}
      />
      <CustomTextInput
        type={'withouticoninput'}
        term={password}
        view_widthset={85}
        textinput_widthset={67}
        onTermChange={text => setPassword(text)}
        mode={'password'}
        secureTextEntry={data.secureTextEntry ? true : false}
        onclick={() => updateSecureTextEntry()}
        PlaceholderText={'Password*'}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={Colors.Appthemecolor}
              uncheckedColor='#A7A9AC'
            />
            <Text
              style={styles.remembermetext}
              //onPress={() => navigation.navigate("ForgetPassword")}
            >
              Remember me
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate('ForgetPassword')}
            style={styles.forgettextview}>
            <Text
              style={styles.forgettext}
              //onPress={() => navigation.navigate("ForgetPassword")}
            >
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomButtonhere
        title={'Sign In'}
        widthset={80}
        topDistance={5}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Drawerroute');
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp(0),
          marginBottom: hp(5),
          marginTop: hp(8),
          width: wp(80),
        }}>
        <View
          style={{
            width: wp(27),
            borderWidth: wp(0.1),
            borderColor: '#93959857',
            // height: hp(0.3),
            // backgroundColor: Colors.inactivetextinput,
          }}
        />
        <View>
          <Text
            style={{
              width: wp(30),
              textAlign: 'center',
              color:'#939598',
              fontFamily: fontFamily.Nunito_SemiBold,
            }}>
            Or continue with
          </Text>
        </View>
        <View
          style={{
            width: wp(27),
            borderWidth: wp(0.1),
            borderColor: '#93959857',
          }}
        />
      </View>

      <IconButton
        title={'Continue with Google Account'}
        icon={appImages.GoogleLogo}
        widthset={80}
        topDistance={0}
        // loading={loading}
        // disabled={disable}
        onPressbtn={() => {
          //navigation.navigate('WelcomeScreen');
        }}
      />
      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: hp(6)}}
        onPress={() => navigation.navigate('CreateAccount')}>
        {/* Your other screen content */}
        <Text style={Authstyles.blacktext}>
          Don’t have an account?{' '}
          <Text style={Authstyles.themecolortext}>Create Account</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(8),
  },
  //////////////////signin//////////////////
  forgettextview: {
    alignItems: 'flex-end',
    width: wp(40),
  },
  forgettext: {
    color: '#000',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Bold,
  },
  remembermetext: {
    color: '#979797',
    fontSize: hp(1.4),
    fontFamily: fontFamily.Nunito_SemiBold,
  },
});

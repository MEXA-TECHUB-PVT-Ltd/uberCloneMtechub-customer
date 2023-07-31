import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

/////////////components//////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import IconButton from '../../components/Button/IconButton';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///app images////////////
import {appImages} from '../../constants/images';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

////////////////app styles/////////
import Authstyles from '../styles/Authstyles';
import {fontFamily} from '../../constants/fonts';

//////////////////firebase////////////////
import firestore from '@react-native-firebase/firestore';

const CreateAccount = ({navigation,route}) => {

  ////////previous data///////////
  const [predata]=useState(route.params)

  ///////////////data states////////////////////
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
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

  ////////////firebase store function/////////////////
  const firebase_store_user = async(props) => {
    try {
      await firestore().collection('users').doc("customer_doc").set({
        id: "customer_1",
        phoneNo: "00000000",
        //country_code: predata.country_code,
        friends: [],
      });
      console.log('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: hp(5)}}>
          <Ionicons
            name="chevron-back"
            color={'#000'}
            size={hp(3.5)}
               onPress={()=>navigation.goBack()}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginTop: hp(5),
          }}>
          <Text style={[Authstyles.maintext, {textAlign: 'left'}]}>
            Create Your Account
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginBottom: hp(8)}}>
          <Text
            style={[Authstyles.subtext, {textAlign: 'left', width: wp(80)}]}>
            Let's get started by creating your new account. Fill in the required
            information below to begin your seamless journey with us.
          </Text>
        </View>
     {   predata.navplace === 'phone'?
        <CustomTextInput
          type={'withouticoninput'}
          term={phone}
          view_widthset={85}
          textinput_widthset={75}
          onTermChange={text => setPhone(text)}
          PlaceholderText={'Phone Number*'}
          keyboard_type={'numeric'}
        />
        :
        <CustomTextInput
          type={'withouticoninput'}
          term={email}
          view_widthset={85}
          textinput_widthset={75}
          onTermChange={text => setEmail(text)}
          PlaceholderText={'Email Address*'}
        />}
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
        <CustomTextInput
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
          title={'Continue'}
          widthset={80}
          topDistance={5}
          // loading={loading}
          // disabled={disable}
          onPress={() => {
            firebase_store_user()
            navigation.navigate('Verification',{navplace:'CreateAccount'});
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: wp(0),
            marginBottom: hp(6),
            marginTop: hp(10),
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
        <View style={{ flexDirection:'row' ,alignSelf: 'center', marginTop: hp(4),marginBottom:hp(3)}}>
          {/* Your other screen content */}
          <Text style={Authstyles.blacktext}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          >
          <Text style={Authstyles.themecolortext} >Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(7.5),
  },
  //////////////////signin//////////////////
  forgettextview: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginTop: hp(0),
    width: wp(40),
  },
  forgettext: {
    color: '#000',
    fontSize: hp(1.5),
    fontFamily: fontFamily.Nunito_Bold,
    marginBottom: wp('8%'),
  },
});

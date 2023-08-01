import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

/////////////components//////////
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomTextInput from '../../components/TextInput/CustomTextInput';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

////////////////app styles/////////
import Authstyles from '../styles/Authstyles';

///////app fonts//////////
import {fontFamily} from '../../constants/fonts';

const ForgetPassword = ({navigation}) => {
  ///////////////data states////////////////////
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
        term={password}
        view_widthset={85}
        textinput_widthset={75}
        onTermChange={newPassword => setPassword(newPassword)}
        PlaceholderText={'Phone Number*'}
      />
 
      <CustomButtonhere
        title={'Send Code'}
        widthset={80}
        topDistance={15}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Verification',{navplace:'ForgetPassword'});
        }}
      />
   
    </SafeAreaView>
  );
};
export default ForgetPassword;

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

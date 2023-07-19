import React, {useState, useEffect,useRef} from 'react';
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
import DescriptionBottomSheet from '../../components/CustomBottomSheet/DescriptionBTS';
import DetailBottomSheet from '../../components/CustomBottomSheet/DetailBTS';

////////////height and width///////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////colors////////////
import Colors from '../../utils/Colors';

/////////////app icons/////////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

////////////////app styles/////////
import Authstyles from '../styles/Authstyles';

//////////////app fonts/////////////
import {fontFamily} from '../../constants/fonts';

///////////////app code fields/////////////
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

///////////////timer/////////////////////
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Verification = ({navigation,route}) => {

  ////////////////predata///////
  const[predata]=useState(route.params)

  /////////////timer state///////////////
  const [disabletimer, setdisableTimer] = useState(false);

  //////////time function//////////
  const children = ({remainingTime}) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };
  //code Confirmation states
  const [value, setValue] = useState();
  //cell number
  const CELL_COUNT = 4;

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  /////////////deatil bottom sheet refrence//////
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: hp(5)}}>
        <Ionicons
          name="chevron-back"
          color={'#000'}
          size={hp(3.5)}
          onPress={()=> navigation.goBack()}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          marginTop: hp(5),
        }}>
        <Text style={[Authstyles.maintext, {textAlign: 'left'}]}>
        Verification
        </Text>
      </View>
      <View style={{justifyContent: 'center', marginBottom: hp(8)}}>
        <Text style={[Authstyles.subtext, {textAlign: 'left', width: wp(80)}]}>
        Please enter the verification code you received to proceed.
        </Text>
      </View>
  
      <View style={styles.Cellview}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : '0')}
            </Text>
          )}
        />
      </View>
      <View
        style={{
         // flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: wp(83),
          alignSelf: 'center',
          marginTop: hp(0.5),
          
        }}>
        <View style={{justifyContent:'center', alignSelf: 'center'}}>
          {disabletimer == true ? (
            <CountdownCircleTimer
              size={40}
              strokeWidth={0}
              children={children}
              isPlaying
              duration={7}
              initialRemainingTime={15}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              onComplete={() => {
                setdisableTimer(false);
                // do your stuff here
                //return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
              }}>
              {({remainingTime}) => (
                <Text style={{color: 'black', fontSize: hp(2),textAlign:'center',width:wp(60),fontFamily:fontFamily.Nunito_Bold,fontWeight:'600'}}>
                  Resend Code in {''}
                  <Text style={{color: 'red', fontSize: hp(2),textAlign:'center',width:wp(60),fontFamily:fontFamily.Nunito_Bold,fontWeight:'800'}}>
                 {remainingTime}
                </Text>
                <Text style={{color: 'black', fontSize: hp(2),textAlign:'center',width:wp(60),fontFamily:fontFamily.Nunito_Bold,fontWeight:'600'}}>
               s
                </Text>
                </Text>
              )}
            </CountdownCircleTimer>
          ) : null}
        </View>

      </View>
      {disabletimer == false ? (
      <TouchableOpacity
          disabled={disabletimer}
          onPress={() => setdisableTimer(true)}
          style={{alignItems:'flex-end',justifyContent:'flex-end',alignSelf:'flex-end',marginRight:wp(5)}}>
          <Text style={styles.Cellmaintext}>Resend Code</Text>
        </TouchableOpacity>
      ):
      null}
      <CustomButtonhere
        title={'Verify'}
        widthset={80}
        topDistance={13}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          predata.navplace === "CreateAccount"?
refRBSheet.current.open()
          :
          navigation.navigate('ResetPassword');
        }}
      />
      <DetailBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={"Report Driver"}
        subtitle={"Enter Comment"}
        onpress={() => {
          {
            refRBSheet.current.close(),
            navigation.navigate('EnableLocation')
          }
        }}
      />
    </SafeAreaView>
  );
};
export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(8),
  },
  ////////////////////Verification///////////////////
  Cellview: {
    marginBottom: 10,
    marginTop: hp(0),
    paddingHorizontal: wp(6),
  },
  root: {
    //flex: 1,
    padding: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: hp(1.8),
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.Appthemecolor,
  },
  codeFieldRoot: {
    marginTop: 10,
  },
  cell: {
    marginTop: hp(3),
    width: wp(14),
    height: hp(6.5),
    lineHeight: hp(6.5),
    fontSize: hp(2),
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: "#E2E9EC",
  },
  focusCell: {
    borderRadius: wp(4),
    borderWidth: 1,
    borderColor: Colors.Appthemecolor,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: wp(3),
    color: 'black',
  },
  Cellmaintext: {
    color: Colors.Appthemecolor,
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: hp(1.6),
  },

});

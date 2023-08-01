import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import CustomButtonhere from '../../../components/Button/CustomButton';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////paper///////////
import {Checkbox} from 'react-native-paper';

///////colors//////////
import Colors from '../../../utils/Colors';

////////fonts///////
import {fontFamily} from '../../../constants/fonts';

const CancleMenu = ({navigation}) => {

  const [checkedIndex, setCheckedIndex] = useState(null);

  const checkboxes = [
    {label: 'Writing for long Driver', value: 'option1'},
    {label: 'Unable to contact Driver', value: 'option2'},
    {label: 'The Price is not Reasonable', value: 'option3'},
    {label: 'Wrong Address Shown', value: 'option4'},
    {label: 'Driver Denied to come to Pickup', value: 'option5'},
    {label: 'Driver Denied to go to Destination', value: 'option6'},
    // Add more options as needed
  ];

  const handleCheckboxPress = index => {
    setCheckedIndex(index);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <CustomHeader
        headerlabel={'Cancel Ride'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <View style={{paddingHorizontal: wp(5), marginTop: hp(2)}}>
        <Text style={styles.maintext}>
          Please Select the Reason for Cancellation
        </Text>
        <View>
          {checkboxes.map((checkbox, index) => (
            <View style={styles.checkview}>
              <Checkbox
                key={index}
                label={checkbox.label}
                status={checkedIndex === index ? 'checked' : 'unchecked'}
                onPress={() => handleCheckboxPress(index)}
                uncheckedColor={'#E2E9EC'}
                color={Colors.Appthemecolor}
              />
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => handleCheckboxPress(index)}>
                <Text style={styles.checktext}>{checkbox.label}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <CustomButtonhere
        title={'Submit'}
        widthset={80}
        topDistance={23}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      />
    </SafeAreaView>
  );
};

export default CancleMenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(8),
  },
  maintext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_SemiBold,
    fontWeight: '600',
    fontSize: hp(1.8),
    marginLeft: wp(2),
    marginBottom: hp(2),
  },
  //////////////////signin//////////////////
  checkview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  checktext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_SemiBold,
    fontWeight: '600',
    fontSize: hp(1.8),
  },
});

import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

//////////////paper////////////
import {Avatar} from 'react-native-paper';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import HistoryRidesCard from '../../../components/CustomCards/HistoryRidesCard';
import CustomTextInput from '../../../components/TextInput/CustomTextInput';
import CustomButtonhere from '../../../components/Button/CustomButton';

////////////////////app pakages////////////////////////
import {Rating} from 'react-native-ratings';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../../utils/Colors';

//////app fonts//////////
import {fontFamily} from '../../../constants/fonts';

const Review = ({navigation, route}) => {
  //////////previous data/////////
  const [predata] = useState(route.params);


    ///////////total rattings/////
    const [total_ratting, setTotal_Ratting] = useState('');

    //////ratting function/////////
    let ratingCompleted = rating => {
      setTotal_Ratting(rating);
    };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
      <CustomHeader
        headerlabel={'Review'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
          <View
            style={{
              marginHorizontal: wp(4.5),
              marginTop: hp(0),
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: wp(70),
                alignItems: 'center',
              }}>
              <Avatar.Icon
                size={hp(7)}
                style={{backgroundColor: '#E7E7E7'}}
                //source={appImages.GoogleLogo}
              />
              <View style={{marginLeft: wp(3), justifyContent: 'center'}}>
                <Text style={styles.notimaintext}>Gregory Smith</Text>
                <Text style={styles.notisubtext}>652 - UKW</Text>
              </View>
            </View>
            <View></View>
          </View>
          <View style={{alignItems: 'center', marginTop: hp(2.5)}}>
            <Text style={styles.headingtext}>How is your trip?</Text>
            <Text style={styles.subtext}>
              Your response will help improving driving experience
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(2),
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginTop: hp(2),
              }}>
              <Rating
                ratingCount={5}
                imageSize={30}
                ratingColor={'orange'}
                ratingContainerStyle={{backgroundColor: 'black'}}
                starContainerStyle={{backgroundColor: 'black'}}
                onFinishRating={ratingCompleted}
              />
            </View>
            <CustomTextInput
              type={'withouticoninput'}
              texterror={'invalid'}
              view_widthset={80}
              textinput_widthset={60}
              mutilenght={16}
              //term={description}
              multiline={true}
              placeholder="Add comment"
              //onTermChange={(desc) => setDescription(desc)}
              from={'ratting'}
            />
          </View>

      <Text style={styles.maintext}>Trip Details</Text>
      <View style={{marginBottom: hp(3), marginTop: hp(1)}}>
        <HistoryRidesCard
          notitext={' William Edward'}
          notisubtext={'12/06/03:00 PM, 12/06/2023'}
          notitime={'$24,00'}
          km={'24 km'}
          type={'detail'}
        />
      </View>
      <Text style={styles.maintext}>Payment Details</Text>
      <View style={{marginTop: hp(3)}}>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Trip Expense</Text>
          <Text style={styles.righttext}>$9,00</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Discount Voucher</Text>
          <Text style={styles.righttext}>$1,00</Text>
        </View>
        <View style={styles.horizontalview}>
          <Text style={styles.lefttext}>Total</Text>
          <Text style={styles.righttext}>$8,00</Text>
        </View>
      </View>
      <View style={{height:hp(20)}}>
      <CustomButtonhere
        title={'Submit Review'}
        widthset={80}
        topDistance={10}
        // loading={loading}
        // disabled={disable}
        onPress={() => {
          navigation.navigate('WelcomeScreen');
        }}
      />
      </View>

      </ScrollView>
    </SafeAreaView>

  );
};

export default Review;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  maintext: {
    color: '#000',
    fontSize: hp(2),
    fontFamily: fontFamily.Nunito_Bold,
    marginLeft: wp(4),
  },
  horizontalview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginVertical: hp(0.5),
  },
  lefttext: {
    color: '#000',
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_Bold,
  },
  righttext: {
    color: '#000',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_Light,
    textAlign: 'right',
  },
  itemview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemtext: {
    color: '#000',
    fontSize: hp(1.7),
    fontFamily: fontFamily.Nunito_Bold,
  },
  line: {
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    marginVertical: hp(2),
  },
  notimaintext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(1.8),
    //fontWeight: '700',
  },

  notisubtext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: hp(1.5),
    //fontWeight: '400',
  },
  line: {
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginVertical: hp(2),
    width: wp(83),
    alignSelf: 'center',
  },
  btntext: {
    color: 'black',
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_SemiBold,
  },
  subtext: {
    color: '#7A7C87',
    fontFamily: fontFamily.Nunito_Regular,
    fontSize: hp(1.6),
    textAlign:'center',
    width:wp(70),
    marginTop:hp(1)
  },
  headingtext: {
    color: 'black',
    fontFamily: fontFamily.Nunito_Bold,
    fontSize: hp(2.3),
    textAlign:'center'
  },
});

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
import CustomHeader from '../../components/Header/CustomHeader';
import HistoryRidesCard from '../../components/CustomCards/HistoryRidesCard';
import DescriptionBottomSheet from '../../components/CustomBottomSheet/DescriptionBTS';
import RattingModal from '../../components/Modal/RattingModal';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

//////app fonts//////////
import {fontFamily} from '../../constants/fonts';

const RidesDetail = ({navigation, route}) => {
  //////////previous data/////////
  const [predata] = useState(route.params);

  ///////////////Modal States///////////////
  const [modalVisible, setModalVisible] = useState(false);

  /////////////deatil bottom sheet refrence//////
  const refRBSheet = useRef();

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}> */}
      <CustomHeader
        headerlabel={'Ride Details'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
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
      <View style={{marginTop: hp(3),marginLeft:wp(2)}}>
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
      {predata.navplace === 'completed' ? null : <View style={styles.line} />}
      {predata.navplace === 'completed' ? null : (
        <Text style={styles.maintext}>Cancelled By Driver</Text>
      )}
      {predata.navplace === 'completed' ? null : (
        <View
          style={{
            marginHorizontal: wp(4.5),
            marginTop: hp(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(0),
              width: wp(70),
              alignItems: 'center',
            }}>
            {/* <Image
                  source={appImages.GoogleLogo}
                  style={styles.logo}
                  resizeMode="contain"
                /> */}
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
      )}
      {predata.navplace === 'completed' ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(27),
            paddingHorizontal: wp(8),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.Appthemecolor,
              width: wp(38),
              height: hp(6),
              borderRadius: wp(3),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.btntext}>Rate Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.Appthemecolor,
              width: wp(38),
              height: hp(6),
              borderRadius: wp(3),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => refRBSheet.current.open()}>
            <Text style={styles.btntext}>Report Driver</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {/* </ScrollView> */}
      <DescriptionBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={'Report Driver'}
        subtitle={'Username'}
        btntext={'ADD'}
        onpress={() => {
          {
            refRBSheet.current.close()
          }
        }}
      />
      <RattingModal
        modalVisible={modalVisible}
        text={'Success'}
        btn_text={'Go to Create Profile'}
        subtext={'Account Verified Successfully'}
        type={'single_btn'}
        onPress={() => {
          setModalVisible(false);
          //navigation.navigate('CreateProfile');
        }}
      />
    </SafeAreaView>
  );
};

export default RidesDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  maintext: {
    color: '#000',
    fontSize: hp(2),
    fontFamily: fontFamily.Nunito_Bold,
    marginLeft: wp(6),
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
    color: '#585858',
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_SemiBold,
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
});

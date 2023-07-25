import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, FlatList, StatusBar, ScrollView,View, Text,TouchableOpacity} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../components/Header/CustomHeader';
import MyWalletCard from '../../components/NotificationView/Mywallet';
import IconsTopTabs from '../../components/IconsTabs/IconsTopTabs';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

/////////////////colors/////////////
import Colors from '../../utils/Colors';

///////////////////svgs//////////////
import Wallet from '../../assets/svgs/MyWallet.svg';
import Cash from '../../assets/svgs/changeCash.svg';

////////////////dataa//////////////////
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const MyWallet = ({navigation}) => {

    //////////////////////menu states///////
    const [sent, setSent] = useState(true);
    const [recieved, setRecieved] = useState(false);

  /////////////Get Notification/////////////
  const [Notifications, setNotifications] = useState('');

  ///render function
  const renderItem = ({item}) => {
    return (
      <MyWalletCard
        notitext={'Username'}
        notisubtext={'12/06/2023'}
        notitime={'$ 24'}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}> */}
      <CustomHeader
        headerlabel={'My Wallet'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
        <View style={{height:hp(23),width:wp(89),alignSelf:'center',borderRadius:wp(3),    borderColor: '#F2F2F2',marginTop:hp(3),
    borderWidth: wp(0.3),padding:hp(2)}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Wallet width={wp(15)} height={hp(8)} />
<View style={{marginLeft:wp(3)}}>
    <Text style={styles.balancetext}>Balance</Text>
    <Text style={styles.pricetext}>$ 2,555</Text>
</View>
</View>
<Cash width={wp(12)} height={hp(6)} />
</View>
<View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(4),
                paddingHorizontal:wp(5)
              }}>
              <View
                style={{
                  backgroundColor: Colors.Appthemecolor,
                  width: wp(30 ),
                  height: hp(4.5),
                  borderRadius: wp(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.btntext}>Withdrawal</Text>
              </View>
              <View
                style={{
                  backgroundColor: Colors.Appthemecolor,
                  width: wp(30),
                  height: hp(4.5),
                  borderRadius: wp(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.btntext}>Top-ups</Text>
              </View>
            </View>
        </View>
        <View style={ {paddingHorizontal: wp(5),flexDirection:'row',marginVertical:hp(2),marginTop:hp(4)}}>
          <TouchableOpacity
          style={{width:wp(18)}}
            onPress={() => {
            setSent(true)
            setRecieved(false)
            }}>
            <IconsTopTabs
              title={'Sent'}
              //icon={appImages.Schedule}
              width={12}
              state={sent}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
                setSent(false)
                setRecieved(true)
            }}>
            <IconsTopTabs
              title={'Received'}
              //icon={appImages.Ongoing}
              width={'20%'}
              state={recieved}
            />
          </TouchableOpacity>
        </View>
      <View style={{height:hp(40)}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default MyWallet;

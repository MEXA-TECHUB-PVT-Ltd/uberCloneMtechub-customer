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
import MyWalletCard from '../../components/NotificationView/Mywallet';
import IconsTopTabs from '../../components/IconsTabs/IconsTopTabs';
import HistoryRidesCard from '../../components/CustomCards/HistoryRidesCard';

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

const HistoryRides = ({navigation}) => {
  //////////////////////menu states///////
  const [sent, setSent] = useState(true);
  const [recieved, setRecieved] = useState(false);

  /////////////Get Notification/////////////
  const [Notifications, setNotifications] = useState('');

  ///render function
  const renderItem = ({item}) => {
    return sent === true ? (
      <HistoryRidesCard
        notitext={' William Edward'}
        notisubtext={'12/06/03:00 PM, 12/06/2023'}
        notitime={'$24,00'}
        km={'24 km'}
        cardPress={() => {
          navigation.navigate('RidesDetail', {navplace: 'completed'});
        }}
      />
    ) : (
      <HistoryRidesCard
        notitext={' William Edward'}
        notisubtext={'12/06/03:00 PM, 12/06/2023'}
        notitime={'$24,00'}
        km={'24 km'}
        cardPress={() => {
          navigation.navigate('RidesDetail', {navplace: 'cancelled'});
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}> */}
      <CustomHeader
        headerlabel={'History of Rides'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />

      <View
        style={{
          paddingHorizontal: wp(5),
          flexDirection: 'row',
          marginVertical: hp(2),
          marginTop: hp(1),
        }}>
        <TouchableOpacity
          style={{width: wp(30)}}
          onPress={() => {
            setSent(true);
            setRecieved(false);
          }}>
          <IconsTopTabs
            title={'Completed'}
            //icon={appImages.Schedule}
            width={25}
            state={sent}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSent(false);
            setRecieved(true);
          }}>
          <IconsTopTabs
            title={'Cancelled'}
            //icon={appImages.Ongoing}
            width={'20%'}
            state={recieved}
          />
        </TouchableOpacity>
      </View>
      <View style={{}}>
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

export default HistoryRides;

import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, FlatList, StatusBar, ScrollView} from 'react-native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import NotificationView from '../../../components/NotificationView/NotificationView';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

/////////////////app images///////////
import {appImages} from '../../../constants/images';

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

const Notification = ({navigation}) => {
  /////////////Get Notification/////////////
  const [Notifications, setNotifications] = useState('');

  ///render function
  const renderItem = ({item}) => {
    return (
      <NotificationView
        notitext={'Driver accepted the ride'}
        notisubtext={'Lorem ipsum lorem ipsum lorem'}
        notitime={'03:00 PM'}
        notiicon={
          item.type === 'completed'
            ? appImages.NotiCheck
            : item.type === 'cancel'
            ? appImages.NotiCancel
            : item.type === 'schedule'
            ? appImages.NotiSchedule
            : appImages.NotiOther
        }
      />
    );
  };
  return (
    <SafeAreaView style={styles.container1}>
      {/* <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}> */}
      <CustomHeader
        headerlabel={'Notifications'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Notification;

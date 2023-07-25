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

////////////notification data///////////
import {notification_data} from '../../../App_dummy_App/data/Notification_list';

const Notification = ({navigation}) => {
  /////////////Get Notification/////////////
  const [Notifications, setNotifications] = useState('');

  ///render function
  const renderItem = ({item}) => {
    return (
      <NotificationView
        noti_image={item.noti_icon}
        notitext={item.noti_maintext}
        notisubtext={item.noti_subtext}
        notitime={item.noti_time}
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
      <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
      <CustomHeader
        headerlabel={'Notifications'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <FlatList
        data={notification_data}
        renderItem={renderItem}
        scrollEnabled={false}
        keyExtractor={item => item.id}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

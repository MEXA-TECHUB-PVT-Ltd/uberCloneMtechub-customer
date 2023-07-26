import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Text,
} from 'react-native';

////////////naviagtion///////////////
import {useIsFocused} from '@react-navigation/native';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';

////////////////height and width////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////////app styles////////////
import styles from './styles';

//////////////list dta///////////////
import {chatlist_data} from '../../../App_dummy_App/data/Chatlist_data';

//////////////////firebase////////////////
import firestore from '@react-native-firebase/firestore';

const ChatList = ({navigation}) => {
  /////////navigation variable/////////////
  const isFocused = useIsFocused();

  ///////////////////flatlist render item///////////////
  const renderitem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={[
            styles.card,
            {backgroundColor: item.active === 'true' ? '#FAC21366' : 'white'},
          ]}
          onPress={() => {
            navigation.navigate('ChatScreen', {
              navtype: 'chatlist',
              userid:"driver_1",
            });
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems:'center'
            }}>
            <View style={{}}>
              <Image
                source={item.user_image}
                style={{width: wp(14), height: hp(8)}}
                resizeMode="contain"
              />
            </View>
            <View style={{marginLeft: wp(3), marginTop: hp(1), width: wp(47)}}>
              <Text style={styles.user_name_txt}>{item.user_name}</Text>
              <Text style={styles.detailtxt}>{item.detail}</Text>
            </View>
            </View>
            <View style={{height:hp(3),marginRight:wp(5)}}>
              <Text style={styles.timetxt}>{item.time}</Text>
            </View>

        </TouchableOpacity>
        <View style={styles.line} />
      </>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <CustomHeader
        headerlabel={'My Chats'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
      />
      <View style={{marginTop: hp(2)}}>
        <FlatList
          data={chatlist_data}
          renderItem={renderitem}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatList;

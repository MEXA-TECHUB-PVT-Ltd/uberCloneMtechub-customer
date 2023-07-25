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

  ///////////////Modal States///////////////
  const [modalVisible, setModalVisible] = useState(false);

  const [friendList, setFriendList] = useState([]);

  const user=async()=>{
    var user_id = "1_drivers"
    //await AsyncStorage.getItem('User_id');
   firestore()
    .collection('users')
    .doc('user_' + user_id)
    .onSnapshot(snapshot => {
      if (snapshot.exists) {
        const userData = snapshot.data();
        const userFriendList = userData.friends || [];
        setFriendList(userFriendList);
      }
    });
  }

  useEffect( () => {
    user()
    console.log('friend list here', friendList,"..............");
    startChatWithUser()
    // return () => {
    //   unsubscribe();
    // };
  }, []);
  
  const startChatWithUser = async () => {
 
    var user_id = "1_drivers"
    var Item_userid= "2_drivers"
    // await AsyncStorage.getItem('User_id');
    //const isFriend = friendList.includes(Item_userid);
    const isFriend = friendList.some((friend) => friend.id === Item_userid);
    console.log('Chat other user.', isFriend, Item_userid,"........");
    if (isFriend) {
      // Start the chat with the other user
      console.log('Chat started with the other user.');
      navigation.navigate('ChatScreen', {
        navtype: 'chatlist',
        userid: Item_userid,
      });
    } else {
      await firestore().collection('users').doc('user_'+ user_id)
        .update({friends:firestore.FieldValue.arrayUnion({ id: Item_userid, user_name: "username", user_image: "tt" })})
        .then(() => {
          console.log('Other user added to the friend list.');
          navigation.navigate('ChatScreen', {
            navtype: 'chatlist',
            userid: Item_userid,
          });
          // Start the chat with the other user
          console.log('Chat started with the other user.');
        })
        .catch(error => {
          console.log('Error adding other user to the friend list:', error);
        });
    }
  };

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
              userid: item.id,
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

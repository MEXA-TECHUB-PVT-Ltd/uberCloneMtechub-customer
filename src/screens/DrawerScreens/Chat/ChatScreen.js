import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  PermissionsAndroid,
  Text,
  StatusBar,
} from 'react-native';

///////////////import app components/////////////
import CamerBottomSheet from '../../../components/CameraBottomSheet/CameraBottomSheet';
import ChatHeader from '../../../components/Chat/ChatHeader';
import EmojiSelector from '../../../components/Chat/EmojiModal';

//////////////////app icons////////////////
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

////////////////app styles/////////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////////////////app Packages//////////////
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
  Composer,
  Avatar
} from 'react-native-gifted-chat';

//////////////furestore/////////////
import firestore from '@react-native-firebase/firestore';

//////////////////////////app api/////////////////////////
//import axios from 'axios';
//import {BASE_URL, IMAGE_URL} from '../../../utills/ApiRootUrl';
//import AsyncStorage from '@react-native-async-storage/async-storage';

/////////////////app images//////////////
import Colors from '../../../utils/Colors';

////////////////////navigation//////////////////
import {useIsFocused} from '@react-navigation/native';

//////////////sens button svg////////////
import SendBtn from '../../../assets/svgs/Chat/Send_icon.svg';
import Smily_Icon from '../../../assets/svgs/Chat/Smily_icon.svg';
import {fontFamily} from '../../../constants/fonts';
import {appImages} from '../../../constants/images';

const ChatScreen = ({route, navigation}) => {
  //////////navigation//////////
  const isFocused = useIsFocused();

  ////////////previos data//////////
  const [emoji_visible, setEmojivisible] = useState(false);

  ////////////previos data//////////
  const [predata] = useState(route.params);

  ////////Bottom sheet references/////////
  const refRBSheet = useRef();

  //////////////chat states/////////////
  const [messages, setMessages] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  /////////////login user//////////
  const [login_user, setLoginUser] = useState('');

  /////////////Get Notification/////////////
  const [profileImage, setProfileImage] = useState('');
  const [username, setUsername] = useState('');

  /////////get login user//////////
  // const getUserMessages = async () => {
  //   var user = await AsyncStorage.getItem('Userid');
  //   setLoginUser(user);
  // };

  const AllMessages = async () => {
    var user = 'customer_1';
    const doc_id =
      route.params.userid > user
        ? user + '-' + route.params.userid
        : route.params.userid + '-' + user;

    const messageRef = firestore()
      .collection('chats')
      .doc(doc_id)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    messageRef.onSnapshot(querySnap => {
      const allmsg = querySnap.docs.map(docsnap => {
        const data = docsnap.data();
        if (data.createdAt) {
          return {
            ...docsnap.data(),
            createdAt: docsnap.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docsnap.data(),
            createdAt: new Date(),
          };
        }
      });
      setMessages(allmsg);
    });
  };
  const ref = useRef();

  useEffect(() => {
    AllMessages();
    //   requestCameraPermission();
  }, [isFocused]);
  const onSend = useCallback((messages = []) => {
    handleSend(messages);
  }, []);
  const handleSend = async messageArray => {
    console.log('here chat message value array', messageArray);
    var user = 'customer_1';
    //var user = await AsyncStorage.getItem('Userid');
    const docid =
      route.params.userid > user
        ? user + '-' + route.params.userid
        : route.params.userid + '-' + user;

    let myMsg = null;
    const msg = messageArray[0];
    console.log('here chat message value', msg);
    myMsg = {
      ...msg,
      //text: emoji_name,
      type: 'image_text',
      //image: path,
      senderId: '2',
      receiverId: '1',
      user: {
        _id: user,
        name: 'ali',
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
      },
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc(docid)
      .collection('messages')
      .add({
        ...myMsg,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    messages.forEach(message => {});
    AllMessages();
  };
  const CustomInputToolbar = props => {
    return (
      <View
        style={{
          bottom: hp(0),
          height: hp(7),
          width: wp(100),
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          backgroundColor: '#F4F8FC',
          //bottom: hp(1),
        }}>
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: '#F4F8FC',
            paddingLeft: wp(10),
            paddingRight: wp(9),
            width: wp(80),
            left: wp(3),
            bottom: hp(0.5),
            borderColor: '#F4F8FC',
            borderWidth: 1,
          }}
        />
        <View style={{position: 'absolute', top: hp(1), left: wp(4)}}>
          <Smily_Icon width={wp(7)} height={hp(5)} />
        </View>
      </View>
    );
  };
  const SendComponent = props => {
    return (
      <Send
        {...props}
        containerStyle={{
          borderWidth: 0,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(5),
            width: wp(12),
            position: 'absolute',
            bottom: hp(0),
            left: wp(12),
          }}>
          <SendBtn width={wp(12)} height={hp(10)} />
        </View>
      </Send>
    );
  };
  const CustomBubbleText = props => {
    return (
      <View>
        {props.currentMessage.image ? (
          <Image source={{uri: props.currentMessage.image}} />
        ) : (
          <Text
            style={{
              color: 'black',
              paddingHorizontal: wp(1),
              paddingVertical: 0,
              fontFamily: fontFamily.Nunito_Medium,
              //fontWeight: "bold",
            }}>
            {props.currentMessage.text}
          </Text>
        )}
      </View>
    );
  };

  const CustomChatBubble = props => {
    const {user, currentMessage} = props;
    const isCurrentUser = currentMessage.user._id === user._id;

    return (
      <View
        style={[
          styles.bubblecontainer,
          isCurrentUser && styles.containerCurrentUser,
        ]}>
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: Colors.Appthemecolor,
              borderBottomRightRadius: 3,
              borderBottomLeftRadius: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              marginBottom: 35,
              marginRight: 10,
              alignItems: 'flex-end', // Align the content to the right
              paddingTop: 10,
              paddingBottom: 5,
              paddingHorizontal: 5,
            },
            left: {
              backgroundColor: '#F4F8FC',
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 5,
              marginBottom: 35,
              marginLeft: 10,
              alignItems: 'flex-start', // Align the content to the left
              paddingTop: 10,
              paddingBottom: 5,
              paddingHorizontal: 5,
            },
          }}
          containerStyle={{
            backgroundColor: 'red',
          }}
          timeTextStyle={{
            left: {
              color: '#AFB3BC',
              fontFamily: fontFamily.Nunito_Medium,
              fontSize: hp(1.4),
              marginBottom: -35,
              top: 18,
              position: 'relative',
            },
            right: {
              color: '#AFB3BC',
              fontFamily: fontFamily.Nunito_Medium,
              fontSize: hp(1.4),
              marginBottom: -35,
              top: 18,
              position: 'relative',
            },
          }}
          messageTextStyle={{
            left: {
              color: '#1E263C', // Color for text in the left bubble (from other users)
              fontSize: hp(1.8), // Customize font size
              lineHeight: 20, // Customize line height
              fontFamily: fontFamily.Nunito_Medium,
            },
            right: {
              color: '#1E263C', // Color for text in the left bubble (from other users)
              fontSize: hp(2), // Customize font size
              lineHeight: 20, // Customize line height
              fontFamily: fontFamily.Nunito_Medium,
            },
          }}
          showUserAvatar
          // renderUsernameOnMessage
          renderAvatarOnTop
          renderAvatar={renderAvatar} 
          // renderAvatar={avatarProps => (
          //   <Image
          //     source={isCurrentUser ? user.avatar : appImages.BookRide} // Replace with your own avatar source
          //     style={styles.avatar}
          //   />
          // )}
        />
      </View>
    );
  };

  const renderAvatar = (props) => {
    const { currentMessage } = props;
    return <Avatar source={{ uri: currentMessage.user.avatar }} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.Appthemecolor}
        barStyle="dark-content"
      />
      <ChatHeader
        title={'Chat'}
        left_icon={'chevron-back-sharp'}
        type={'withoutlogo'}
        left_iconPress={() => {
          navigation.goBack();
        }}
        username={'Mark Hailey'}
        userimage={profileImage}
      />
      {/* <View style={{height:hp(79.6),marginTop:hp(4.5)}}>
</View> */}
      <GiftedChat
        alwaysShowSend
        showUserAvatar={true}
        showAvatarForEveryMessage={true}
        isTyping={true}
        renderAvatar={() => null}
        bottomOffset={8}
        // /inverted={true}
        multiline={true}
        //minInputToolbarHeight={hp(80)}
        textInputStyle={{
          fontSize: hp(1.8),
          color: 'black',
          //backgroundColor: '#F4F8FC',
          // height: hp(3),
        }}
        textInputProps={{
          placeholder: 'Write text here',
          placeholderTextColor: '#7A7C87',
          autoFocus: false,
          autoCorrect: false,
          style: {
            //backgroundColor: '#F4F8FC',
            width: wp(60),
            height: hp(6),
            color: 'black',
            fontSize: hp(2),
            // bottom: 0,
          },
        }}
        renderAvatarOnTop
        renderInputToolbar={props => {
          return <CustomInputToolbar {...props} />;
        }}
        renderSend={props => {
          return <SendComponent {...props} />;
        }}
        messages={messages}
        onSend={text => {
          onSend(text);
        }}
        user={{
          _id: 'customer_1',
          avatar: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        }}
        custontext={{}}
        renderBubble={props => <CustomChatBubble {...props} />}
        // renderBubble={props => {
        //   return (
        //     <Bubble
        //       {...props}
        //       wrapperStyle={{
        //         right: {
        //           color: Colors.Appthemecolor,
        //           backgroundColor:
        //             props.currentMessage.text != ''
        //               ?  Colors.Appthemecolor
        //               : 'orange',
        //           //width: props.currentMessage.text != '' ? wp(80) : wp(70),
        //           marginBottom: hp(1.5),
        //           paddingTop: hp(2),
        //           paddingHorizontal: wp(3),
        //         },
        //         left: {
        //           color: Colors.Appthemecolor,
        //           backgroundColor:
        //             props.currentMessage.text != ''
        //               ?"#F4F8FC"
        //               : 'orange',
        //           //width: props.currentMessage.text != "" ? wp(80) : wp(70),
        //           marginBottom: hp(1.2),
        //           paddingTop: hp(1),
        //           paddingHorizontal: wp(2),
        //         },
        //       }}
        //     />
        //   );
        // }}
        renderMessageText={props => {
          return <CustomBubbleText {...props} />;
        }}
       // Render the user's avatar
      />

      <CamerBottomSheet
        refRBSheet={refRBSheet}
        onClose={() => refRBSheet.current.close()}
        title={'From Gallery'}
        type={'Chat_image'}
      />
      <EmojiSelector
        modal_open={emoji_visible}
        modal_close={() => setEmojivisible(false)}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

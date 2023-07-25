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
  const [username, setUsername] = useState('')

  /////////get login user//////////
  // const getUserMessages = async () => {
  //   var user = await AsyncStorage.getItem('Userid');
  //   setLoginUser(user);
  // };

  const AllMessages = async () => {
    var user = '1';
    const doc_id =
      route.params.userid > '1'
        ? '1' + '-' + route.params.userid
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

  // useEffect(() => {
  //   requestCameraPermission();
  // }, [isFocused]);
  const onSend1 = useCallback((messages = []) => {
    handleSend(messages);
  }, []);
  const handleSend = async messageArray => {
    console.log('here chat message value array', messageArray);
    var user = await AsyncStorage.getItem('Userid');
    const docid =
      route.params.userid > user
        ? '1' + '-' + route.params.userid
        : route.params.userid + '-' + '1';

    let myMsg = null;
    const msg = messageArray[0];
    console.log('here chat message value', msg);
    myMsg = {
      ...msg,
      text: emoji_name,
      //type: "image_text",
      //image: path,
      senderId: '2',
      receiverId: '1',
      user: {
        _id: user,
        name: 'ali',
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
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])
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
            bottom: hp(2),
            borderColor:'#F4F8FC',
            borderWidth:1
          }}
        />
        <View style={{position: 'absolute', top: hp(2.5), left: wp(4)}}>
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
          _id: predata.userid,
        }}
        custontext={{}}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  color: Colors.Appthemecolor,
                  backgroundColor:
                    props.currentMessage.text != ''
                      ? Colors.Appthemecolor
                      : 'orange',
                  width: props.currentMessage.text != '' ? wp(80) : wp(70),
                  marginBottom: hp(1.5),
                  paddingTop: hp(2),
                  paddingHorizontal: wp(3),
                },
                left: {
                  color: Colors.Appthemecolor,
                  backgroundColor:
                    props.currentMessage.text != ''
                      ? Colors.inactivetextinput
                      : 'orange',
                  //width: props.currentMessage.text != "" ? wp(80) : wp(70),
                  marginBottom: hp(1.2),
                  paddingTop: hp(1),
                  paddingHorizontal: wp(2),
                },
              }}
            />
          );
        }}
        renderMessageText={props => {
          return <CustomBubbleText {...props} />;
        }}
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

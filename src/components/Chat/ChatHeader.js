import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';

//////////////paper///////
import {Avatar} from 'react-native-paper';

///////////////app icons///////////////
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

////////////////navigation///////////////
import {useNavigation} from '@react-navigation/native';

////////////////////Heigth and width//////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

////////////////Colors/////////////////
import Colors from '../../utils/Colors';

////////////app fonts//////////
import {fontFamily} from '../../constants/fonts';

//////////////svg/////////////
import ActiveDot from '../../assets/svgs/Chat/GreenDot.svg';
import Call from '../../assets/svgs/Chat/call.svg';

const ChatHeader = ({
  username,
  bio,
  picture,
  onlineStatus,
  onPress,
  viewstate,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon
          name={'chevron-back'}
          size={25}
          color={'#000000'}
          onPress={() => navigation.goBack()}
          style={{marginLeft: wp(0)}}
        />
      </TouchableOpacity>
      <View style={styles.profileOptions}>
        <TouchableOpacity style={styles.profile}>
          <View>
            <Avatar.Icon
              size={hp(9)}
              style={{backgroundColor: '#E7E7E7'}}
              //source={appImages.GoogleLogo}
            />
          </View>
          <View style={styles.usernameAndOnlineStatus}>
            <Text style={styles.username}>{username}</Text>
            <View style={{flexDirection: 'row',alignItems:"center"}}>
              <ActiveDot width={wp(4)} height={hp(6)} />
              <Text style={styles.onlineStatus}>{"Active Now"}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Call width={wp(8)} height={hp(6)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.Appthemecolor,
    height: Height * 0.18,
    width: wp(100),
    alignItems:'center',
    paddingTop:hp(5)
    },
  backButton: {
    alignSelf: 'center',
    paddingHorizontal: wp(2),
  },
  profileOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(0),
    width:wp(75)
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    flex: 4,
  },
  image: {
    height: hp(7),
    width: wp(15),
    borderRadius: wp(10),
  },
  icondot: {
    height: hp(1.8),
    width: wp(4),
  },
  usernameAndOnlineStatus: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: wp(2),
  },
  username: {
    color: '#000000',
    fontSize: hp(2.2),
    fontFamily: fontFamily.Nunito_Bold,
  },
  onlineStatus: {
    color: '#343937',
    fontSize: hp(1.8),
    fontFamily: fontFamily.Nunito_SemiBold,
    marginLeft:wp(2)
  },
});

export default ChatHeader;

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
} from 'react-native';

///////////////navigation////////////////
import {useNavigation} from '@react-navigation/native';

////////paper//////////
import {Avatar} from 'react-native-paper';

////////////components//////////
import CustomTextInput from '../TextInput/CustomTextInput';
import CustomButtonhere from '../Button/CustomButton';

////////////////////app pakages////////////////////////
import {Rating} from 'react-native-ratings';

///////////////app styles////////////////////
import styles from './styles';

////////////HEIGHT AND WIDTH////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

////////////app colors////////////////////
import Colors from '../../utils/Colors';

/////////////////app images/////////////////////
import {appImages} from '../../constants/images';

const RattingModal = props => {
  /////////////navigation state/////////////////
  const navigation = useNavigation();

  ///////////total rattings/////
  const [total_ratting, setTotal_Ratting] = useState('');

  //////ratting function/////////
  let ratingCompleted = rating => {
    setTotal_Ratting(rating);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.CloseModal}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView]}>
          <View
            style={{
              marginHorizontal: wp(4.5),
              marginTop: hp(0),
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: wp(70),
                alignItems: 'center',
              }}>
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
          <View style={{alignItems: 'center', marginTop: hp(2.5)}}>
            <Text style={styles.headingtext}>How is your trip?</Text>
            <Text style={styles.subtext}>
              Your response will help improving driving experience
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(2),
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'center',
                marginTop: hp(2),
              }}>
              <Rating
                ratingCount={5}
                imageSize={30}
                ratingColor={'orange'}
                ratingContainerStyle={{backgroundColor: 'black'}}
                starContainerStyle={{backgroundColor: 'black'}}
                onFinishRating={ratingCompleted}
              />
            </View>
            <CustomTextInput
              type={'withouticoninput'}
              texterror={'invalid'}
              view_widthset={80}
              textinput_widthset={60}
              mutilenght={16}
              //term={description}
              multiline={true}
              placeholder="Add comment"
              //onTermChange={(desc) => setDescription(desc)}
              from={'ratting'}
            />
            <View style={{marginBottom: hp(4)}}>
              <CustomButtonhere
                title={'Submit'}
                widthset={80}
                topDistance={3}
                // loading={loading}
                // disabled={disable}
                onPress={props.onPress}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RattingModal;

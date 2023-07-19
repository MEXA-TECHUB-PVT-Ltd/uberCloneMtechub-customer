import * as React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';

/////////////////styles////////////////////
import styles from './styles';

////////////////Colors/////////////
import Colors from '../../utils/Colors';

/////////width and height///////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

///////app images//////
import {appImages} from '../../constants/images';
import {fontFamily} from '../../constants/fonts';

const IconButton = ({
  icon,
  title,
  onPressbtn,
  loading,
  disable,
  widthset,
  iscolor,
  topDistance,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'center',
        marginTop: hp(topDistance),
        flexDirection: 'row',
        borderColor: '#E2E9EC',
        borderWidth: wp(0.4),
        borderRadius: wp(2.5),
        height: hp(7),
        width: wp(widthset),
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPressbtn}>
      <Image source={icon} style={{marginLeft: wp(2)}} />
      {/* Your other screen content */}
      <Text
        style={{
          color: 'black',
          fontFamily: fontFamily.Nunito_Light,
          fontWeight: '500',
          fontSize: hp(1.8),
          marginLeft: wp(5),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;

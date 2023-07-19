import * as React from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';

///////////paper package//////////////
import {Button} from 'react-native-paper';

/////////////////styles////////////////////
import styles from './styles';

////////////////Colors/////////////
import Colors from '../../utils/Colors';

/////////width and height///////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButtonhere = ({
  icon,
  mode,
  title,
  onPress,
  loading,
  disable,
  widthset,
  iscolor,
  topDistance,
}) => {
  return (
    <View style={[styles.container, {top: hp(topDistance)}]}>
      <Button
        icon={icon}
        buttonColor={Colors.Appthemecolor}
        mode={mode}
        contentStyle={[
          styles.buttoncontent,
          {
            width: wp(widthset),
            backgroundColor:
              iscolor === 'login' ? 'white' : Colors.Appthemecolor,
            color: iscolor === 'login' ? 'white' : Colors.Appthemecolor,
          },
        ]}
        style={[
          styles.button,
          {
            width: wp(widthset),
            backgroundColor:
              iscolor === 'login' ? 'white' : Colors.Appthemecolor,
          },
        ]}
        labelStyle={[
          styles.label,
          {
            color: iscolor === 'login' ? Colors.Appthemecolor : 'black',
            backgroundColor:
              iscolor === 'login' ? 'white' : Colors.Appthemecolor,
          },
        ]}
        onPress={onPress}
        disabled={disable}
        loading={loading}>
        {title}
      </Button>
    </View>
  );
};

export default CustomButtonhere;

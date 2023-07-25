import React from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

const VerticalLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dottedLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dottedLine: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    height: hp(5),
    borderColor: 'black',
  },
});

export default VerticalLine;

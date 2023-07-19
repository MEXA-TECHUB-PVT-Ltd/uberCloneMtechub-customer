import React, {useEffect, useState, useCallback} from 'react';
import {SafeAreaView, ScrollView, View, Text, FlatList} from 'react-native';

///////////////app components////////////////
import CustomHeader from '../../../components/Header/CustomHeader';

/////////////app styles///////////////////
import styles from './styles';

//////////height and width/////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const TermsCondition = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <CustomHeader
          headerlabel={'Terms & Condition'}
          iconPress={() => {
            navigation.goBack();
          }}
          icon={'chevron-back'}
        />

        <View
          style={{marginTop: hp(3), marginLeft: wp(5), marginBottom: hp(2)}}>
          <Text style={[styles.sub_text, {width: wp(92)}]}>
            The customer is very important, the customer will be followed by the
            customer. I ask him what he should say, who places the highest good
            in pleasure. But let us grant this of course. He gives intervals and
            relaxes. Nor indeed am I ignorant that there is utility in history,
            and not merely pleasure. Two Kings: The Construction of the
            Internet. But wretched, if in a wicked and vicious life he overflows
            with pleasures. If anything, we can. {'\n'}{'\n'}
            The customer is very important, the customer will be followed by the
            customer. I ask him what he should say, who places the highest good
            in pleasure. But let us grant this of course. He gives intervals and
            relaxes. Nor indeed am I ignorant that there is utility in history,
            and not merely pleasure. Two Kings: The Construction of the
            Internet. But wretched, if in a wicked and vicious life he overflows
            with pleasures. If anything, we can. I do not know how it is
            possible, if he is luxurious, to have limited desires. Therefore to
            every animal that which is placed in the appetite is that which is
            adapted to nature. But they seek the principle of duty better than
            Pyrrhus; Thus gravely and severely he separated pleasure from good.
            Certainly{'\n'}{'\n'}
            For it is a consequence and arises after, as I said.
            Two Kings: The Construction of the Internet. For from the town, I
            believe, and: If I had known you were there, I would have come to
            you myself. It matters, however, in what way. The wounds which he
            inflicted on the state, he healed the same Shouldn't it be thrown
            out with a smile rather than a prayer? They promise science, which
            it was not surprising that the country was dearer to the lover of
            wisdom. For they disagree with each other. Let us see what you said
            about friendship.
            {'\n'}
         
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsCondition;

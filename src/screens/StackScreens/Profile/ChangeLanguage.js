import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

///////paper////////////
import {RadioButton} from 'react-native-paper';

///////iocns///////
import Icon from 'react-native-vector-icons/Ionicons';

//////////////////////app components///////////////
import CustomHeader from '../../../components/Header/CustomHeader';
import SearchTextInput from '../../../components/TextInput/SearchInput';

//////////////////height and width/////////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

/////////////////colors/////////////
import Colors from '../../../utils/Colors';

///////////////////svgs//////////////
import Search from '../../../assets/svgs/LanguageSearch.svg';

///////app fonts//////////////
import {fontFamily} from '../../../constants/fonts';

////////////////dataa//////////////////
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Language type 1',
    label: 'Option 1',
    value: 'option1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Language type 1',
    label: 'Option 2',
    value: 'option2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Language type 1',
    label: 'Option 3',
    value: 'option3',
  },
];

const ChangeLanguage = ({navigation}) => {
  ////////////radio button/////////////
  const [selectedButton, setSelectedButton] = useState('');

  //////////////////////menu states///////
  const [search_enable, setSearchEnable] = useState(false);

  /////////////Get Notification/////////////
  const [Notifications, setNotifications] = useState('');

  ///render function
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.itemview}>
          <Text style={styles.itemtext}>{item.title}</Text>
          <RadioButton
            label={item.label}
            value={item.value}
            status={selectedButton === item.value ? 'checked' : 'unchecked'}
            onPress={() => setSelectedButton(item.value)}
            color={Colors.Appthemecolor}
            uncheckedColor={Colors.Appthemecolor}
            //onPress={() => setChecked('first')}
          />
        </View>
        <View style={styles.line} />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {search_enable === false ? (
        <CustomHeader
          headerlabel={'Change Language'}
          iconPress={() => {
            navigation.goBack();
          }}
          icon={'chevron-back'}
          searchicon={<Search width={wp(6)} height={hp(6)} />}
          onpresseacrh={() => {
            setSearchEnable(true);
          }}
        />
      ) : (
        <View style={styles.topview}>
          <Icon
            name={'chevron-back'}
            size={25}
            color={'black'}
            onPress={() => setSearchEnable(false)}
          />
          <SearchTextInput
            icon={<Search width={wp(4.5)} height={hp(4)} />}
            type={'iconinput'}
            // term={email}
            placeholder="Search here"
            view_widthset={84}
            textinput_widthset={70}
            search_enable={true}
            // onTermChange={newPassword => setPassword(newPassword)}
          />
        </View>
      )}
      <View style={{paddingHorizontal: wp(4), marginTop: hp(3)}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  topview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
    marginTop: hp(2),
    marginBottom: hp(0),
  },
  itemview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemtext: {
    color: '#000',
    fontSize: hp(1.7),
    fontFamily: fontFamily.Nunito_Bold,
  },
  line: {
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
    marginVertical: hp(2),
  },
});

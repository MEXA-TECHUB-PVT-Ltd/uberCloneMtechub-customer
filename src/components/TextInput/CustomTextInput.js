import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

/////////app icons//////////
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

////////////app colors///////////////
import Colors from '../../utils/Colors';

////////////////app fonts////////////
import {fontFamily} from '../../constants/fonts';

//////////////////////responsive library//////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomTextInput = ({
  term,
  placeholder,
  onTermChange,
  type,
  icon,
  disable,
  editable,
  length,
  returnType,
  onNext,
  onRef,
  mode,
  secureTextEntry,
  onclick,
  multiline,
  keyboard_type,
  Lines,
  dopdownicon,
  no_icon,
  PlaceholderText,
  view_widthset,
  textinput_widthset,
  from,
  mutilenght,
  autoFocushere,
  focus
}) => {
  const [isfocused, setisFocused] = useState(false);
  console.log('hree props,',  autoFocushere)
  return (
    <View>
      <View>
        <Text style={[styles.PlaceHolderText,{color: focus === "true" ||isfocused == true ? 'black' : '#A7A9AC'}]}>
          {PlaceholderText}
        </Text>
      </View>
      <View
        style={[
          styles.TextFieldView,
          {
            width:wp(view_widthset),
            borderColor:  from === "report" || isfocused == true ? Colors.Appthemecolor : '#E2E9EC',
            height: multiline === true ? hp(mutilenght) : hp(6),
            borderWidth:multiline === true && from === "ratting"?null:multiline === true ?wp(0.5):wp(0.3),
            borderRadius: multiline === true ? wp(3) : wp(2),
            backgroundColor:from === "ratting"?"#EFEFF2":'white'
          },
        ]}>
        { type === 'withouticoninput'?null
         :type === 'dropdowniconinput'?null
         :no_icon === 'no_icon'?null
         :
         <View style={{marginLeft: wp(4)}}>
          {icon}
          </View>
      
        // <MaterialCommunityIcons
        //   name={icon}
        //   color={icon === "map-marker"?Colors.Appthemecolor:Colors.App_icon_color}
        //   size={19}
        //   style={{marginLeft: wp(4)}}
        // />
        }
        <TextInput
          style={[
            styles.TextField,
            {
              width:wp(textinput_widthset),
              textAlignVertical: multiline === true ? 'top' : null,
              height: multiline === true ? hp(16) : null,
              marginTop: multiline === true ? hp(0) : null,
              marginHorizontal: type === 'iconinput' ? wp(2) : wp(5),
            },
          ]}
          ref={onRef}
          autoFocus={autoFocushere}
          autoCorrect={false}
          clearTextOnFocus={true}
          placeholder={placeholder}
          value={term}
          editable={editable}
          disabled={disable}
          returnKeyType={returnType}
          keyboardType={keyboard_type}
          placeholderTextColor={Colors.App_placeholderColor}
          onFocus={() => setisFocused(true)}
          onChangeText={onTermChange}
          onEndEditing={() => setisFocused(false)}
          onSubmitEditing={onNext}
          secureTextEntry={secureTextEntry}
          numberOfLines={Lines}
          multiline={multiline}></TextInput>
        {mode === 'password' ? (
          <TouchableOpacity onPress={onclick}>
            {secureTextEntry ? (
              <Ionicons
                name="eye"
                color={'#D4D4D4'}
                size={19}
                style={{marginRight: wp(3)}}
              />
            ) : (
              <Ionicons
                name="eye-off"
                color={'#D4D4D4'}
                size={19}
                style={{marginRight: wp(2)}}
              />
            )}
          </TouchableOpacity>
        ) : type === 'dropdowniconinput' ? (
          <MaterialCommunityIcons
            name={dopdownicon}
            color={Colors.App_icon_color}
            size={25}
            style={{marginRight: wp(4)}}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextField: {
    fontSize: hp(1.6),
    marginHorizontal: wp(5),
    fontFamily: fontFamily.Nunito_SemiBold,
    //color: '#6B6B6B',
    width: wp(20),
    color:"#000", 
    //backgroundColor:'red'
  },
  TextFieldView: {
    flexDirection: 'row',
    height: hp(7),
    width: wp(85),
    borderRadius: wp(6),
    marginTop: hp(0),
    marginBottom: hp(0),
    borderColor: '#6B6B6B',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: wp(8),
    width: wp(4),
    height: hp(3),
  },
  ErrorText: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: 20,
  },
  PlaceHolderText: {
    fontSize: hp(1.6),
    fontFamily: fontFamily.Nunito_SemiBold,
    marginTop:hp(2.2),
    marginBottom:hp(1)
  },
});

export default CustomTextInput;

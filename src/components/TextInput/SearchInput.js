import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
} from "react-native";

/////////app icons//////////
import Ionicons from "react-native-vector-icons/Ionicons";

////////////////app fonts////////////
import { fontFamily } from "../../constants/fonts";

//////////////////////responsive library//////////////////
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchTextInput = ({
  icon,
  term,
  placeholder,
  onTermChange,
  disable,
  editable,
  returnType,
  onNext,
  onRef,
  secureTextEntry,
  keyboard_type,
  searchiconpress,
  search_enable
}) => {
  return (
    <View>
      <View style={[styles.TextFieldView,{backgroundColor:search_enable===true?"#FAFAFA":'white',width:search_enable===true?wp(85):wp(90)}]}>
      {/* <Ionicons
        name={'search'}
        size={25}
        color={"black"}
        onPress={searchiconpress}
        style={{ marginLeft: wp(3) }}
      /> */}
               <View style={{marginLeft: wp(4)}}>
          {icon}
          </View>
        <TextInput
          style={[styles.TextField]}
          ref={onRef}
          autoCorrect={false}
          clearTextOnFocus={true}
          placeholder={placeholder}
          value={term}
          editable={editable}
          disabled={disable}
          returnKeyType={returnType}
          keyboardType={keyboard_type}
          placeholderTextColor={'black'}
          onChangeText={onTermChange}
          onSubmitEditing={onNext}
          secureTextEntry={secureTextEntry}
        ></TextInput>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextField: {
    fontSize: hp(1.6),
    fontFamily: fontFamily.Poppins_Regular,
    color: "black",
    width: wp(75),
    // /backgroundColor:'red',
    marginLeft:wp(5)
  },
  TextFieldView: {
    flexDirection: "row",
    height: hp(6),
    width: wp(90),
    borderRadius: wp(7),
    marginTop: hp(1),
    marginBottom: hp(1),
    backgroundColor:'white',
    //borderColor: "black",
    //borderWidth: wp(0.3),
    alignSelf: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: wp(8),
    width: wp(3.5),
    height: hp(2.5),
  },
});

export default SearchTextInput;

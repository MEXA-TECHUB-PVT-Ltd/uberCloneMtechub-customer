import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image, PermissionsAndroid,} from 'react-native';

///////navigation////
import {useNavigation} from '@react-navigation/native';

////////////app pakages////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';

///////////////app styles//////////////////
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

////////////////////redux////////////
import {useSelector, useDispatch} from 'react-redux';

//////////////app pakages//////////////////
import ImagePicker from 'react-native-image-crop-picker';

const CamerBottomSheet = props => {
  const navigation = useNavigation();

  /////////////redux states///////
  const dispatch = useDispatch();

  const requestPermission = async () => {
    try {
      console.log('asking for permission')
      const granted = await PermissionsAndroid.requestMultiple(
        [PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]
      )
      if (granted['android.permission.CAMERA'] && granted['android.permission.WRITE_EXTERNAL_STORAGE'] && granted['android.permission.READ_EXTERNAL_STORAGE']) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (error) {
      console.log('permission error', error)
    }
  }
  
  //////////////////////cameraimage//////////////////
  const takePhotoFromCamera = () => {
    requestPermission()
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      //cropping: true,
      compressImageQuality: 0.7,
      multiple: props.type === 'multiplepic' ? true : false,
    }).then(image => {
      props.onImageSelected(image.path);
      props.refRBSheet.current.close();
    });
  };
  ////////////////////library image//////////////////
  const choosePhotoFromLibrary = () => {
    requestPermission()
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      //cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      props.onImageSelected(image.path);
      props.refRBSheet.current.close();
    });
  };
  return (
    <RBSheet
    //sstyle={{flex:1}}
    ref={props.refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={false}
    openDuration={50}
    closeDuration={50}
    animationType="fade"
    //height={500}
    customStyles={{
      wrapper: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
      },
      draggableIcon: {
        backgroundColor: 'white',
      },
      container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: hp(30),
      },
    }}>
       <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: wp(8),
          alignItems: 'center',
        }}>
        <Text style={styles.maintext}>Upload Image</Text>
        <TouchableOpacity onPress={() => props.refRBSheet.current.close()}>
          <Ionicons
            name="close"
            size={22}
            color={'black'}
            onPress={() => props.refRBSheet.current.close()}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems:'center',
          marginTop: hp(3),
        }}>
        <TouchableOpacity
          onPress={() => {
            takePhotoFromCamera();
            props.refRBSheet.current.close();
          }}
          style={styles.modaltextview}>
          <Ionicons name="camera" size={25} color={'black'} />
          <Text style={styles.optiontext}>Upload from Camera</Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'rgba(255, 255, 255, 0.60)',
            borderBottomWidth: hp(0.1),
            width: wp(85),
            alignSelf: 'center',
            marginBottom: hp(2),
            marginTop: hp(2),
          }}></View>
        <TouchableOpacity
          onPress={() => {
            choosePhotoFromLibrary(), props.refRBSheet.current.close();
          }}
          style={styles.modaltextview}>
          <Ionicons name="image" size={25} color={'black'} />
          <Text style={styles.optiontext}>Upload from Gallery</Text>
        </TouchableOpacity>
      </View>
  </RBSheet>

  );
};

export default CamerBottomSheet;

import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

//////app icons////////////////
import Ionicons from 'react-native-vector-icons/Ionicons';

///////////////////app components////////////
import CustomButtonhere from '../../../components/Button/CustomButton';
import CustomTextInput from '../../../components/TextInput/CustomTextInput';
import SelectMenu from '../../../components/SelectMenu/SelectMenu';
import SearchTextInput from '../../../components/TextInput/SearchInput';
import LottieModal from '../../../components/LottieModal/LottieModal';

////////app styles///////////////////
//import styles from './styles';
import styles from '../../Dashboard/styles';

////////colors/////////
import Colors from '../../../utils/Colors';

////height and width///////////////////
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

///////////////////map states//////////////////
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

/////////////map key//////
import {MapKeyApi} from '../../../utils/MapKey';

////////////location function////////////////
import {
  getCurrentLocation,
  locationPermission,
} from '../../../api/CurrentLocation';

/////////////map variables////////////////
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.08;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

///////////////////svgs//////////////
import Money from '../../../assets/svgs/Money_icon.svg';
import Card from '../../../assets/svgs/Credit-card.svg';
import Coupon from '../../../assets/svgs/Coupon.svg';
import UserLocatin_marker from '../../../assets/svgs/UserLocation.svg';
import Search from '../../../assets/svgs/Search_icon.svg';
import Car_marker from '../../../assets/svgs/Car_icon.svg';

const pinsdata = [
  {latitude: 33.6493, longitude: 73.0843},
  {
    latitude: 33.6431,
    longitude: 73.0733,
  },
];

const PaymentMethod = ({navigation, route}) => {
  //////////////menu states//////////
  const [bike, setBike] = useState(true);
  const [car, setCar] = useState(false);
  const [van, setVan] = useState(false);

  ///////////////////map/////////////////////
  const mapRef = useRef();
  const markerRef = useRef();
  const ref = useRef();

  const [state, setState] = useState({
    curLoc: {
      //   latitude:    previousdata.driverLat,
      //   longitude:  previousdata.driverLng,
      // latitude:    previousdata.pickupLat,
      // longitude:  previousdata.pickupLng,
      latitude: 33.6491,
      longitude: 73.0833,
    },
    destinationCords: {
      //   latitude:    previousdata.pickupLat,
      //   longitude:  previousdata.pickupLng,
      latitude: 33.6844,
      longitude: 73.0479,
      // latitude:    previousdata.dropoffLat,
      // longitude:  previousdata.dropoffLng,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const {
    curLoc,
    time,
    distance,
    destinationCords,
    isLoading,
    coordinate,
    heading,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));

  const animate = (latitude, longitude) => {
    const newCoordinate = {latitude, longitude};
    if (Platform.OS == 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 1000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude, heading} = await getCurrentLocation();
      console.log('get live location after 4 second', heading);
      animate(latitude, longitude);
      updateState({
        heading: heading,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  };

  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{flex: 1, height: hp(100)}}>
      <View style={[styles.container]}>
        {0 === 0 ? (
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            initialRegion={{
              ...curLoc,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            // region={{
            //   // latitude:  previousdata.pickupLocation.coordinates.latitude,
            //   // longitude:  previousdata.pickupLocation.coordinates.longitude,
            //   // latitudeDelta: 0.015,
            //   // longitudeDelta: 0.0121,
            //   latitude: 37.78825,
            //   longitude: -122.4324,
            //   latitudeDelta: 0.015,
            //   longitudeDelta: 0.0121,
            // }}
          >
            <Marker.Animated
              ref={markerRef}
              coordinate={
                //coordinate
                curLoc
              }>
              <UserLocatin_marker width={wp(15)} height={hp(6)} />
            </Marker.Animated>
            {pinsdata.map((marker, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  onPress={() => {}}>
                  <Car_marker width={wp(6)} height={hp(6)} />
                </Marker>
              );
            })}
          </MapView>
        ) : null}
        <View style={{marginLeft: wp(3), marginBottom: hp(4)}}></View>
        <SearchTextInput
          icon={<Search width={wp(4.5)} height={hp(4)} />}
          type={'iconinput'}
          // term={email}
          placeholder="Search here"
          view_widthset={84}
          textinput_widthset={75}
          // onTermChange={newPassword => setPassword(newPassword)}
        />

        <View style={[styles.lastView]}>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(36),
              paddingTop: hp(2),
              width: wp(100),
              borderTopLeftRadius: wp(8),
              borderTopRightRadius: wp(8),
              paddingHorizontal: wp(5),
            }}>
            <Text style={styles.bottommaintext}>Payment Method</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp(3),
                marginTop: hp(5),
                marginBottom: hp(3),
              }}>
              <SelectMenu
                label={'Cash'}
                type={'payment'}
                icon={<Money width={wp(10)} height={hp(6)} />}
                menuPress={() => {
                  setBike(true), setCar(false), setVan(false);
                }}
                selected={bike}
              />
              <SelectMenu
                label={'DebitCard'}
                type={'payment'}
                icon={
                  <Card width={wp(10)} height={hp(6)} color="red" fill="red" />
                }
                menuPress={() => {
                  setBike(false), setCar(true), setVan(false);
                }}
                selected={car}
              />
              <SelectMenu
                label={'Voucher'}
                type={'payment'}
                icon={<Coupon width={wp(10)} height={hp(6)} />}
                menuPress={() => {
                  setBike(false), setCar(false), setVan(true);
                }}
                selected={van}
              />
            </View>

            <CustomButtonhere
              title={'Next'}
              widthset={80}
              topDistance={3}
              // loading={loading}
              // disabled={disable}
              onPress={() => {
                setModalVisible(true);
                navigation.navigate('OnGoingTrip');
              }}
            />
            <LottieModal
              modalVisible={modalVisible}
              CloseModal={() => setModalVisible(false)}
              text={'Finding Best Driver for You'}
              buttontext={'Go to Login'}
              onPress={() => {
                //navigation.navigate('Login'),
                 setModalVisible(false);
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentMethod;

import React, {useEffect, useState, useRef} from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

///////////////////app components////////////
import CustomTextInput from '../../components/TextInput/CustomTextInput';
import CustomButtonhere from '../../components/Button/CustomButton';
import SelectMenu from '../../components/SelectMenu/SelectMenu';
import VerticalLine from '../../components/VerticleLine/VerticleLine';

////////app styles///////////////////
import styles from '../BottomTabScreens/styles';

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
import {MapKeyApi} from '../../utils/MapKey';

////////////location function////////////////
import {
  getCurrentLocation,
  locationPermission,
} from '../../api/CurrentLocation';

/////////////map variables////////////////
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.08;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

///////////////////svgs//////////////
import Menu_Icon from '../../assets/svgs/Menu_icon.svg';
import Bike from '../../assets/svgs/Bike.svg';
import Car from '../../assets/svgs/Car.svg';
import Van from '../../assets/svgs/Van.svg';
import LocationStart from '../../assets/svgs/Starting_icon.svg';
import LocationIcon from '../../assets/svgs/Location_icon.svg';
import Bell from '../../assets/svgs/DashboardBell.svg';
import Search from '../../assets/svgs/DashboardSearch.svg';
import UserLocatin_marker from '../../assets/svgs/UserLocation.svg';
import Car_marker from '../../assets/svgs/Car_icon.svg';

const pinsdata = [
  {latitude: 33.6493, longitude: 73.0843},
  {
    latitude: 33.6431,
    longitude: 73.0733,
  },
];

const Dashboard = ({navigation, route}) => {
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
        <View style={{marginLeft: wp(3), marginBottom: hp(1)}}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(3),
          }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Menu_Icon width={wp(5)} height={hp(6)} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('SearchLocation',{navplace:'dashboard'})}>
            <Search width={wp(15)} height={hp(6)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Bell width={wp(15)} height={hp(6)} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.lastView]}>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(46),
              paddingTop: hp(2),
              width: wp(100),
              borderTopLeftRadius: wp(8),
              borderTopRightRadius: wp(8),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
              }}>
              <SelectMenu
                label={'Bike'}
                icon={<Bike width={wp(15)} height={hp(6)} />}
                menuPress={() => {
                  setBike(true), setCar(false), setVan(false);
                }}
                selected={bike}
              />
              <SelectMenu
                label={'Shared'}
                icon={<Car width={wp(15)} height={hp(6)} />}
                menuPress={() => {
                  setBike(false), setCar(true), setVan(false);
                }}
                selected={car}
              />
              <SelectMenu
                label={'Premium'}
                icon={<Van width={wp(15)} height={hp(6)} />}
                menuPress={() => {
                  setBike(false), setCar(false), setVan(true);
                }}
                selected={van}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp(5),
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: hp(3),
                }}>
                <LocationStart width={wp(7)} height={hp(6)} />
                <VerticalLine />
                <LocationIcon width={wp(8)} height={hp(6)} />
              </View>
              <View style={{marginTop:hp(3)}}>
                <CustomTextInput
                  type={'iconinput'}
                  // term={email}
                  placeholder="Where are you?"
                  view_widthset={78}
                  textinput_widthset={68}
                  // onTermChange={newPassword => setPassword(newPassword)}
                />
                <View style={{height:hp(3)}}></View>
                <CustomTextInput
                  type={'iconinput'}
                  // term={email}
                  placeholder="Where you want to go?"
                  view_widthset={78}
                  textinput_widthset={68}
                  // onTermChange={newPassword => setPassword(newPassword)}
                />
              </View>
            </View>

            <CustomButtonhere
              title={'Next'}
              widthset={80}
              topDistance={3}
              // loading={loading}
              // disabled={disable}
              onPress={() => {
                navigation.navigate('PaymentMethod');
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

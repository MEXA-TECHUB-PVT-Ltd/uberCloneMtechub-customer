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
import VerticalLine from '../../../components/VerticleLine/VerticleLine';

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
import Cross from '../../../assets/svgs/Cross_icon.svg';
import LeftIcon from '../../../assets/svgs/arrowleft.svg';
import UserLocatin_marker from '../../../assets/svgs/UserLocation.svg';
import Location from '../../../assets/svgs/SelectedLocation_icon.svg';

const SearchLocation = ({navigation, route}) => {
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
      >
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
          </MapView>
        ) : null}
        <View style={{marginLeft: wp(3), marginBottom: hp(4)}}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(4),
            backgroundColor: 'white',
            borderRadius: wp(7),
            width: wp(90),
            height: hp(6),
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: wp(75),
              alignItems: 'center',
              //backgroundColor:'red'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftIcon width={wp(5)} height={hp(5)} />
                </TouchableOpacity>
    
            <Text style={styles.toptext}>Lorem ipsum lorem ipsum</Text>
          </View>

          <Cross width={wp(4)} height={hp(4)} />
        </View>
        <View style={[styles.lastView]}>
          <View
            style={{
              backgroundColor: 'white',
              height: hp(30),
              paddingTop: hp(3),
              width: wp(100),
              borderTopLeftRadius: wp(8),
              borderTopRightRadius: wp(8),
              paddingHorizontal: wp(5),
            }}>
            <Text style={styles.bottommaintext}>Location</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp(3),
                alignItems: 'center',
              }}>
              <View style={{}}>
                <CustomTextInput
                  icon={<Location width={wp(5)} height={hp(4)} />}
                  type={'iconinput'}
                  // term={email}
                  placeholder="Lorem ipsum Lorem ipsum"
                  view_widthset={84}
                  textinput_widthset={75}
                  // onTermChange={newPassword => setPassword(newPassword)}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(5),
                marginBottom:hp(1)
              }}>
              <View
                style={{
                  backgroundColor: Colors.Appthemecolor,
                  width: wp(43),
                  height: hp(6),
                  borderRadius: wp(3),
                  alignItems: 'center',
                  justifyContent: 'center',

                }}>
                <Text style={styles.btntext}>Set as pickup Location</Text>
              </View>
              <View
                style={{
                  backgroundColor: Colors.Appthemecolor,
                  width: wp(43),
                  height: hp(6),
                  borderRadius: wp(3),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.btntext}>Set as dropoff Location</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchLocation;

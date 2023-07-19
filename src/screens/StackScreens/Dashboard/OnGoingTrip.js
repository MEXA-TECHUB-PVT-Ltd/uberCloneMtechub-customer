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
import CustomHeader  from '../../../components/Header/CustomHeader';
import VerticalLine from '../../../components/VerticleLine/VerticleLine';

////////app styles///////////////////
import styles from './styles';

///////////////colors////////////
import Colors from '../../../utils/Colors';

import { Avatar } from 'react-native-paper';

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
import UserLocatin_marker from '../../../assets/svgs/UserLocation.svg';
import Car_marker from '../../../assets/svgs/Car_icon.svg';
import Cancle from  '../../../assets/svgs/cancle.svg'
import LocationStart from '../../../assets/svgs/Starting_icon.svg';
import LocationIcon from '../../../assets/svgs/Location_icon.svg';
import Call from '../../../assets/svgs/ColorCall_icon.svg';
import Chat from '../../../assets/svgs/ColorChat_icon.svg';
import Clock from '../../../assets/svgs/Color_clock.svg';

const pinsdata=[
    {      latitude: 33.6493,
      longitude: 73.0843,},
      {
        
        latitude: 33.6431,
        longitude: 73.0733,
      }
  ]

const OnGoingTrip = ({navigation, route}) => {
  //////////////menu states//////////
  const [confirm_ride, setConfirmRide] = useState(false);
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
    <SafeAreaView style={styles.container1}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
   >
           <View style={{backgroundColor:'white',height:hp(25),width:wp(100)}}>
    <Text>here</Text>
    <CustomHeader
        headerlabel={'Ongoing Trip'}
        iconPress={() => {
          navigation.goBack();
        }}
        icon={'chevron-back'}
        searchicon={<Cancle width={wp(18)} height={hp(6)} />}
        onpresseacrh={()=>{}}
      />
          <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: wp(4.5),
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <LocationStart width={wp(7)} height={hp(3)} />
                <VerticalLine />
                <LocationIcon width={wp(8)} height={hp(3)} />
              </View>
              <View style={{height:hp(9)}}>
              <Text style={styles.toptext}>Cibadak, Sukabumi</Text>
              <Text style={[styles.toptext,{marginTop:hp(4)}]}>Cisaat selatan, Sukabumi</Text>
              </View>
            </View>
   </View>
      <View style={[styles.container]}>
        {0 === 0 ? (
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={[styles.map,{height:hp(50)}]}
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
             {/* {Object.keys(destinationCords).length > 0 && (
            <Marker coordinate={destinationCords} image={appImages.orangeloc} />
          )} */}

          {Object.keys(destinationCords).length > 0 && (
            <MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={MapKeyApi}
              strokeWidth={6}
              strokeColor="red"
              optimizeWaypoints={true}
              onStart={params => {
                console.log(`Started routing between "${params.origin}" 
                            and "${params.destination}"`);
              }}
              onReady={result => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);
                fetchTime(result.distance, result.duration),
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      // right: 30,
                      // bottom: 300,
                      // left: 30,
                      // top: 100,
                    },
                  });
              }}
              onError={errorMessage => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
          </MapView>
        ) : null}
        <View style={{marginLeft: wp(3), marginBottom: hp(0),marginTop:hp(3)}}></View>

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
   <View style={{flexDirection:'row',justifyContent:"space-between"}}>
   <View style={{flexDirection:'row',alignItems:'center'}}>
   <Avatar.Icon size={hp(6)}  color={'#DFDCD4'} style={{backgroundColor:'#DFDCD4'}}/>
   <View style={{width:wp(50),marginLeft:wp(3)}}>
   <Text style={styles.username}>Norman Gordon</Text>
   <Text style={styles.numberplate}>Plate No: 64213-T-2</Text>
   </View>

    </View>
    <Call width={wp(10)} height={hp(5)} />
    <Chat width={wp(10)} height={hp(5)} />
   </View>
   <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:hp(3),paddingHorizontal:wp(15),marginBottom:hp(3)}}>
   <View style={{flexDirection:'row'}}>
   <Clock width={wp(6)} height={hp(5)} />
    <View style={{alignItems:'center',marginLeft:wp(3)}}>
   <Text style={styles.numberplate}>Time</Text>
   <Text style={styles.username}>10 min</Text>
    </View>
   </View>
   <View style={styles.line} />
   <View style={{flexDirection:'row'}}>
   <Money width={wp(6)} height={hp(5)} />
    <View style={{alignItems:'center',marginLeft:wp(3)}}>
   <Text style={styles.numberplate}>Amount</Text>
   <Text style={styles.username}>$ 234</Text>
    </View>
   </View>
   </View>                              
{confirm_ride === false?
            <CustomButtonhere
            title={'Confirm Ride'}
            widthset={80}
            topDistance={3}
            // loading={loading}
            // disabled={disable}
            onPress={() => {
                setConfirmRide(true)
              //navigation.navigate('WelcomeScreen');
            }}
          />
          :
          <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(5),
          }}>
          <View
            style={{
              backgroundColor: Colors.Appthemecolor,
              width: wp(40),
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
              width: wp(40),
              height: hp(6),
              borderRadius: wp(3),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.btntext}>Set as dropoff Location</Text>
          </View>
        </View>
}

       
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default OnGoingTrip;

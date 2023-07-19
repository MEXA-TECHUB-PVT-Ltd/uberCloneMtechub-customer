import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text,Image} from 'react-native';

/////////////components//////////
import OnboardingComponents from '../../components/Onboardings/OnboardingComponents';
import CustomButtonhere from '../../components/Button/CustomButton';

/////////////////images//////////
import image from '../../assets/images/RideBook.png'

////////////height and width///////////
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../utils/Colors';

const OnboardingScreen = ({navigation}) => {

  /////////////menu states//////
  const[slide1,setSlide1]=useState(true)
  const[slide2,setSlide2]=useState(false)
  const[slide3,setSlide3]=useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={"white"}
        barStyle="dark-content"
      />
      {slide1 === true ?
            <View style={{marginTop:hp(10)}}>
            <OnboardingComponents
            image={require("../../assets/images/RideBook.png")}
            maintext={"Select Your Destination"}
            subtext={"Let us know your desired drop-off location, and we'll take care of the rest."}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(15),alignSelf:'center',marginTop:hp(4)}}>
              <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(7),borderRadius:wp(5),alignItems:'center',justifyContent:'center'}}>
                <View style={{height:hp(0.5),width:wp(4.5),backgroundColor:Colors.Appthemecolor}}></View>
              </View>
              <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(2.2),borderRadius:wp(5)}}>
                </View>
                <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(2.2),borderRadius:wp(5)}}>
                </View>
            </View>
            <View
                style={{
                  height: hp(19),
                  marginTop: hp(2),
                }}>
                <CustomButtonhere
                  title={'Next'}
                  widthset={80}
                  topDistance={8}
                  // loading={loading}
                  // disabled={disable}
                  onPress={() => {
                    setSlide1(false),
                    setSlide2(true),
                    setSlide3(false)
                  }}
                />
              </View>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'black'}}>Skip</Text>
              </View>
            </View>
            :slide2 === true ?
            <View style={{marginTop:hp(10)}}>
            <OnboardingComponents
            image={require("../../assets/images/destination.png")}
            maintext={"Best Route to Your Destination"}
            subtext={"We're committed to providing you with the most efficient and reliable route to your destination"}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(15),alignSelf:'center',marginTop:hp(4)}}>
          
              <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(2.2),borderRadius:wp(5)}}>
                </View>
                <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(7),borderRadius:wp(5),alignItems:'center',justifyContent:'center'}}>
                <View style={{height:hp(0.5),width:wp(4.5),backgroundColor:Colors.Appthemecolor}}></View>
              </View>
                <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(2.2),borderRadius:wp(5)}}>
                </View>
            </View>
            <View
                style={{
                  height: hp(19),
                  marginTop: hp(2),
                }}>
                <CustomButtonhere
                  title={'Next'}
                  widthset={80}
                  topDistance={8}
                  // loading={loading}
                  // disabled={disable}
                  onPress={() => {
                    setSlide1(false),
                    setSlide2(false),
                    setSlide3(true)
                  }}
                />
              </View>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'black'}}>Skip</Text>
              </View>
            </View>
            :
            <View style={{marginTop:hp(10)}}>
            <OnboardingComponents
            image={require("../../assets/images/NearByRide.png")}
            maintext={"Get the Best Ride Nearby You"}
            subtext={"We're dedicated to connecting you with the best available ride options in your vicinity."}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(15),alignSelf:'center',marginTop:hp(4)}}>
              <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(2.2),borderRadius:wp(5)}}>
                </View>
                <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(2.2),borderRadius:wp(5)}}>
                </View>
                <View style={{borderColor:'black',borderWidth:hp(0.2),height:hp(1.2),width:wp(7),borderRadius:wp(5),alignItems:'center',justifyContent:'center'}}>
                <View style={{height:hp(0.5),width:wp(4.5),backgroundColor:Colors.Appthemecolor}}></View>
              </View>
            </View>
            <View
                style={{
                  height: hp(19),
                  marginTop: hp(2),
                }}>
                <CustomButtonhere
                  title={'Get Started'}
                  widthset={80}
                  topDistance={8}
                  // loading={loading}
                  // disabled={disable}
                  onPress={() => {
                    setSlide1(false),
                    setSlide2(false),
                    setSlide3(false),
                    navigation.navigate('WelcomeScreen')
                  }}
                />
              </View>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'black'}}>Skip</Text>
              </View>
            </View>
    }

  
    </SafeAreaView>
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
  },
});

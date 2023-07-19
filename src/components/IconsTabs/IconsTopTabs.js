import * as React from 'react';
import {View,Text,ActivityIndicator,Image} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
//////COLORS/////
import Colors from '../../utils/Colors';

///height and width//////////////
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen'


///////////app fonts////////////
import { fontFamily } from '../../constants/fonts';

const IconsTopTabs = (props) => {

    return(
<View style={{
                        alignItems:'center',justifyContent:'center',             
width:wp(props.width)
}}>


                        <Text style={{
                            color:props.state===true?Colors.Appthemecolor:'#AAAAAA',
                     fontSize:props.state===true?hp(2):hp(1.8),
                        fontFamily:props.state===true?fontFamily.Nunito_Bold:fontFamily.Nunito_SemiBold,
                        }}>
                            {props.title}</Text>

                            <View style={{height:hp(0.5),width:wp(props.width),
                            marginTop:hp(0.6                               ),
                            backgroundColor:props.state===true?Colors.Appthemecolor:null,
                            borderRadius:wp(2)}}>

                            </View>
                        </View>
    )
};

export default IconsTopTabs;
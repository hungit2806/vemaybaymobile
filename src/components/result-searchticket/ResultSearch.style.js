import { StyleSheet, Animated } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesResultSearch = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('100%')-StatusBar.currentHeight,
        flexDirection: 'column',
        backgroundColor:'#ffffff'
    },
    webView:{
        width:wp('100%'),
        height:hp('90%')-StatusBar.currentHeight,
        marginTop: hp('2%'),
    }
})
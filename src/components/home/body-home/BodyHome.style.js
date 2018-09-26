import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesBodyHome = StyleSheet.create({
    container: {
        height: hp('80%')-StatusBar.currentHeight,
        width: wp('100%'),
        backgroundColor: 'yellow',
    },
});
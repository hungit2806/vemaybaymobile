import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const stylesNavigation = StyleSheet.create({
    container: {
        height: hp('10%'),
        width: wp('100%'),
        backgroundColor: 'white',  
        flexDirection: 'row'     
    },
})
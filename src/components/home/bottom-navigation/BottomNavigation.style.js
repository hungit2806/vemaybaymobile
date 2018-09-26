import { StyleSheet, Animated } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const stylesBottomNavigation = StyleSheet.create({
    container: {
        height: hp('10%'),
        width: wp('100%'),
        backgroundColor: 'white',  
        flexDirection: 'row'     
    },
    leftContainer: {
        height: hp('10%'),
        width: wp('50%'),
        justifyContent: "center", 
        alignItems: "center"
    },
    rightContainer: {
        height: hp('10%'),
        width: wp('50%'),
        justifyContent: "center", 
        alignItems: "center"
    },
    textTittle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: hp('2%'),
        color:'#f26222'
    },
    textTittleOff: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: hp('2%'),
        color:'#FA8655'
    },
    iconNav: {
        
    }
});

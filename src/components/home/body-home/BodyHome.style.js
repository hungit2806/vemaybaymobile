import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
export const stylesBodyHome = StyleSheet.create({
    container: {
        height: hp('80%')-StatusBar.currentHeight,
        width: wp('100%'),
        alignItems: 'center',
        position:"absolute",
        top:hp('14%'),
    },
    containerFromTo:{
        height: hp('30%'),
        width: wp('95%'),
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        
    },
    containerFrom:{
        height: hp('30%'),
        width: wp('47.5%'),
        flexDirection: 'column',
        textAlign:'center',
        alignItems:'center',
        // borderRightWidth:1,
        // borderColor:'#ffffff',
        justifyContent: 'center',
    },
    containerTo:{
        height: hp('30%'),
        width: wp('47.5%'),
        flexDirection: 'column',
        textAlign:'center',
        alignItems:'center',
        // borderLeftWidth:1,
        // borderColor:'#ffffff',
        justifyContent: 'center',
    },
    txtTitle : {
        color:'#353535',
        fontWeight: 'bold',
        fontSize: hp('3%'),
        borderBottomColor: '#f26222',
        borderBottomWidth: 1,
    },
    txtMS:{
        color:'#353535',
        fontSize: hp('7%'),
    },
    txtTen:{
        color:'#353535',
        fontSize: hp('3%'),
    },
    containerDateStart:{
        height: hp('10%'),
        width: wp('47.5%'),
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        marginTop: 10,
        marginRight:wp("1.25%"),
        backgroundColor:'#ffffff',
        flexDirection:'column'
    },
    containerDateEnd:{
        height: hp('10%'),
        width: wp('45%'),
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        marginTop: 10,
        backgroundColor:'#ffffff',
        marginLeft:wp("1.25%"),
        flexDirection:'column'
    },
    btnOneTripOn:{
        height:hp('5%'),
        width:wp('42.5%'),
        backgroundColor:'#f26222',
        borderColor:'#f26222',
        borderWidth:1,
        textAlign:"center",
        borderRadius:12
    },
    btnOneTripOff:{
        height:hp('5%'),
        width:wp('42.5%'),
        backgroundColor:'#ffffff',
        borderColor:'#f26222',
        borderWidth:1,
        textAlign:"center",
        borderRadius:12
    },
    txtOneTripOn:{
        color:'#ffffff',
        textAlign:"center",
        fontSize:hp('3%')
    },
    txtOneTripOff:{
        color:'#f26222',
        textAlign:"center",
        fontSize:hp('3%')
    },
    txtTitleDate:{
        color:'#ffffff',
        fontSize:hp('2.5%'),
        textAlign:'center',
        fontWeight:"bold",
        borderBottomColor:"#f26222",
        borderBottomWidth:1,
        backgroundColor: "#f26222"
    },
    txtTitleDateOff:{
        color:'#ffffff',
        fontSize:hp('2.5%'),
        textAlign:'center',
        fontWeight:"bold",
        borderBottomColor:"#f26222",
        borderBottomWidth:1,
        backgroundColor: "#FA8655"
    },
    txtDate:{
        color:'#353535',
        fontSize:hp('4%'),
        textAlign:'center',
    },
    txtDateOff:{
        color:'#9e9e9e',
        fontSize:hp('4%'),
        textAlign:'center',
    },
    containerPeople:{
        height: hp('18%'),
        width: wp('95%'),
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
        marginTop: 10,
        backgroundColor:'#ffffff',
        marginLeft:wp("1.25%"),
        flexDirection:'row',
    },
    containerAdult:{
        height: hp('22%'),
        width: wp('31.6%'),
        alignItems:"center"
    },
    containerAdultTitle:{
        width: wp('31.6%'),
        backgroundColor:'#f26222',
        flexDirection:'row',
    },
    containerTxtTitle:{
        flexDirection:'column'
    },
    btnNumber:{
        width:hp('10%'),
        height:hp('10%'),
        borderRadius:hp('4%'),
        borderColor:'#f26222',
        borderWidth:1,
        textAlign:"center",
        alignItems:"center",
        marginTop:5
    },
    txtNumber:{
        color:'#353535',
        fontSize:hp('5%'),  
        textAlign:"center", 
        alignItems:"center",
        lineHeight:hp('10%')
    },
    containerHeaderModelLocation:{
        width:wp('100%'),
        height:hp('8%'),
        backgroundColor:'#f26222',
        textAlign:"center",
        alignItems:"center"
    },
    txtTitleModel:{
        textAlign:"center",
        fontSize:hp('4%'),
        color:'#ffffff',
        lineHeight:hp('8%')
    },
    containerInputText :{
        height:hp('7%'),
        width:wp('97%'),
        borderColor:'#f26222',
        borderWidth:1,
        borderRadius:12,
        flexDirection:'row',
        alignItems:"center",
        marginTop:hp('2%')
    },
    inputText:{
        height:hp('7%'),
        width:hp('82%'),
        fontSize:hp('3%'),
        color:'#f26222'
    }
});
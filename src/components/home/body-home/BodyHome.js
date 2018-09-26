import React, { Component } from 'react';
import {stylesBodyHome} from './BodyHome.style'
import { View,Text,Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class BodyHome extends Component{
    render(){
        return(
            <View style={stylesBodyHome.container}>
                <View style={stylesBodyHome.containerFromTo}>
                    <Image source={require('../../../assets/icons/world.png')} resizeMode={'contain'} style={{
                        height: hp('6%'),width: hp('6%'), position:'absolute',top:hp('14.5%'),left:wp('47.5%')-hp('3%')
                    }} />
                    <View style={stylesBodyHome.containerFrom}>
                        <Text style={stylesBodyHome.txtTitle}>Điểm đi</Text>
                        <Text style={stylesBodyHome.txtMS}>HAN</Text>
                        <Text style={stylesBodyHome.txtTen}>Hà Nội</Text>
                    </View>
                    <View style={stylesBodyHome.containerTo}>
                        <Text style={stylesBodyHome.txtTitle}>Điểm đến</Text>
                        <Text style={stylesBodyHome.txtMS}>SGN</Text>
                        <Text style={stylesBodyHome.txtTen}>Hồ Chí Minh</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={stylesBodyHome.containerDateStart}>
                    </View>
                    <View style={stylesBodyHome.containerDateEnd}>
                    </View>
                </View>
            </View>
        )
    }
}
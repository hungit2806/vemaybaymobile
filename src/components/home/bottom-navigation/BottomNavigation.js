import React, { Component } from 'react';
import { stylesBottomNavigation } from './BottomNavigation.style'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { PAGE_TIMKIEM,PAGE_TIMVERE } from '../../../constants/page-constants'
export default class BottomNavigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            choosePage: PAGE_TIMKIEM
        }
    }
    
    render() {
        return (
            <View style={stylesBottomNavigation.container}>
                <TouchableOpacity onPress={() => { this.setState({ choosePage: PAGE_TIMKIEM }) }}>
                    {
                        this.state.choosePage === PAGE_TIMKIEM ?
                            <View style={stylesBottomNavigation.leftContainer}>
                                <Image source={require('../../../assets/icons/ticket.png')} resizeMode={'contain'} style={{
                                    height: hp('6%'),
                                }} />
                                <Text style={stylesBottomNavigation.textTittle}>Tìm Kiếm Vé</Text>
                            </View> :
                            <View style={stylesBottomNavigation.leftContainer}>
                                <Image source={require('../../../assets/icons/ticket_off.png')} resizeMode={'contain'} style={{
                                    height: hp('5%'),
                                }} />
                                <Text style={stylesBottomNavigation.textTittleOff}>Tìm Kiếm Vé</Text>
                            </View>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.setState({ choosePage: PAGE_TIMVERE }) }}>
                    {
                        this.state.choosePage === PAGE_TIMKIEM ?
                            <View style={stylesBottomNavigation.leftContainer}>
                                <Image source={require('../../../assets/icons/calendar_off.png')} resizeMode={'contain'} style={{
                                    height: hp('5%'),
                                }} />
                                <Text style={stylesBottomNavigation.textTittleOff}>Vé Rẻ Theo Tháng</Text>
                            </View> :
                            <View style={stylesBottomNavigation.leftContainer}>
                                <Image source={require('../../../assets/icons/calendar.png')} resizeMode={'contain'} style={{
                                    height: hp('6%'),
                                }} />
                                <Text style={stylesBottomNavigation.textTittle}>Vé Rẻ Theo Tháng</Text>
                            </View>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}
import React, { Component } from 'react';
import { Image, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import BottomNavigation from './bottom-navigation/BottomNavigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { stylesNavigation } from './Home.style'
import BodyHome from './body-home/BodyHome';
export default class Home extends Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true;
        console.log('statusBarHeight: ', StatusBar.currentHeight);
    }

    static navigationOptions = {
        drawerLabel: 'Home'
    };
    renderNavigation() {
        return (
            <View style={stylesNavigation.container}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer();}}>
                    <View style={{height: hp('10%'),justifyContent: 'center', alignItems: 'center', marginLeft:wp('2%')}}>
                        <Image source={require('../../assets/icons/menu.png')} resizeMode={'contain'} style={{
                            height: hp('5.5%'), width: hp('5.5%')
                        }} />
                    </View>
                </TouchableOpacity>
                <View style={{height: hp('10%'),justifyContent: 'center', alignItems: 'center', marginLeft:wp('2%')}}>
                        <Image source={require('../../assets/logo/logo.png')} resizeMode={'contain'} style={{
                            height: hp('7%')
                        }} />
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                {this.renderNavigation()}
                <BodyHome></BodyHome>
                <BottomNavigation></BottomNavigation>
            </View>
        );
    }
}



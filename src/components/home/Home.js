import React, { Component } from 'react';
import { Image, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import BottomNavigation from './bottom-navigation/BottomNavigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { stylesNavigation } from './Home.style'
import BodyHome from './body-home/BodyHome';
import MonthCheap from './body-home/MonthCheap';
import { PAGE_TIMKIEM } from '../../constants/page-constants'
import Icon from 'react-native-vector-icons/Feather';

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        console.disableYellowBox = true;
        console.log('statusBarHeight: ', StatusBar.currentHeight);
        this.state = {
            page: PAGE_TIMKIEM
        }
    }

    setPage(type) {
        console.log(type)
        this.setState({
            page: type
        })
    }
    render() {
        return (
            <View>

                <View style={{ width: wp('100%'), alignItems: 'center' }}>
                    <Image source={require('../../assets/images/background-search.jpg')} resizeMode={'cover'} style={{
                        width: wp('100%'), height: hp('35%')
                    }} />
                </View>
                {this.state.page === PAGE_TIMKIEM ?<BodyHome navigation={this.props.navigation}/>:<MonthCheap navigation={this.props.navigation}/>}
                <BottomNavigation setPage={this.setPage.bind(this)}></BottomNavigation>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', width: wp('100%'), height: hp('10%'), position: 'absolute', top: 0 }}>
                    <Text style={{ lineHeight: hp('10%'), textAlign: 'center', fontSize: hp('4%'), color: '#FFFFFF' }}>
                        {this.state.page === PAGE_TIMKIEM ? "Tìm Kiếm Vé" : "Vé Rẻ Theo Tháng"}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => { this.setState({ modalVisible: false }) }} style={{ height: hp('5%'), marginLeft: wp('1%'), position: 'absolute', left: 0, marginTop: hp('2.5%') }}>
                    <Icon name="menu" size={hp('5%')} color="#ffffff"></Icon>
                </TouchableOpacity>
            </View>
        );
    }
}



import React, { Component } from 'react';
import { stylesBodyHome } from './BodyHome.style'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class BodyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onetrip: true
        }
    }
    setTypeTrip(type) {
        this.setState({
            onetrip: type
        })
    }
    render() {
        return (
            <View style={stylesBodyHome.container}>
                <View style={stylesBodyHome.containerFromTo}>
                    <Image source={require('../../../assets/icons/world.png')} resizeMode={'contain'} style={{
                        height: hp('6%'), width: hp('6%'), position: 'absolute', top: hp('12%'), left: wp('47.5%') - hp('3%')
                    }} />

                    <View style={stylesBodyHome.containerFrom}>
                        <TouchableOpacity style={this.state.onetrip ? stylesBodyHome.btnOneTripOn : stylesBodyHome.btnOneTripOff} onPress={this.setTypeTrip.bind(this, true)}>
                            <Text style={this.state.onetrip ? stylesBodyHome.txtOneTripOn : stylesBodyHome.txtOneTripOff}>Một Chiều</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ textAlign: 'center',alignItems:"center" }}>
                                <Text style={stylesBodyHome.txtTitle}>Điểm đi</Text>
                                <Text style={stylesBodyHome.txtMS}>HAN</Text>
                                <Text style={stylesBodyHome.txtTen}>Hà Nội</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesBodyHome.containerTo}>
                        <TouchableOpacity style={this.state.onetrip ? stylesBodyHome.btnOneTripOff : stylesBodyHome.btnOneTripOn} onPress={this.setTypeTrip.bind(this, false)}>
                            <Text style={this.state.onetrip ? stylesBodyHome.txtOneTripOff : stylesBodyHome.txtOneTripOn}>Khứ Hồi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ textAlign: 'center',alignItems:"center" }}>
                                <Text style={stylesBodyHome.txtTitle}>Điểm đến</Text>
                                <Text style={stylesBodyHome.txtMS}>SGN</Text>
                                <Text style={stylesBodyHome.txtTen}>Hồ Chí Minh</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <View style={stylesBodyHome.containerDateStart}>
                            <Text style={stylesBodyHome.txtTitleDate}>Ngày Đi</Text>
                            <Text style={stylesBodyHome.txtDate}>27/09/2018</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={stylesBodyHome.containerDateEnd}>
                            <Text style={stylesBodyHome.txtTitleDate}>Ngày Về</Text>
                            <Text style={stylesBodyHome.txtDate}>29/09/2018</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={stylesBodyHome.containerPeople}>
                        <TouchableOpacity>
                            <View style={stylesBodyHome.containerAdult}>
                                <View style={stylesBodyHome.containerAdultTitle}>
                                    <Image source={require('../../../assets/icons/employee.png')} resizeMode={'contain'} style={{
                                        height: hp('5%'), width: hp('5%'), marginTop: 1, marginBottom: 1
                                    }} />
                                    <View style={stylesBodyHome.containerTxtTitle}>
                                        <Text style={{ color: '#ffffff', fontSize: hp('2%'), textAlign: 'center', fontWeight: 'bold' }}>Người Lớn</Text>
                                        <Text style={{ color: '#ffffff', fontSize: hp('2%'), textAlign: 'center' }}>>12 Tuổi</Text>
                                    </View>
                                </View>
                                <View style={stylesBodyHome.btnNumber}>
                                    <Text style={stylesBodyHome.txtNumber}>1</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={stylesBodyHome.containerAdult}>
                                <View style={stylesBodyHome.containerAdultTitle}>
                                    <Image source={require('../../../assets/icons/boy.png')} resizeMode={'contain'} style={{
                                        height: hp('5%'), width: hp('5%'), marginTop: 1, marginBottom: 1
                                    }} />
                                    <View style={stylesBodyHome.containerTxtTitle}>
                                        <Text style={{ color: '#ffffff', fontSize: hp('2%'), textAlign: 'center', fontWeight: 'bold' }}>Trẻ Em</Text>
                                        <Text style={{ color: '#ffffff', fontSize: hp('2%'), textAlign: 'center' }}>2-12 Tuổi</Text>
                                    </View>
                                </View>
                                <View style={stylesBodyHome.btnNumber}>
                                    <Text style={stylesBodyHome.txtNumber}>0</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={stylesBodyHome.containerAdult}>
                                <View style={stylesBodyHome.containerAdultTitle}>
                                    <Image source={require('../../../assets/icons/baby-boy.png')} resizeMode={'contain'} style={{
                                        height: hp('5%'), width: hp('5%'), marginTop: 1, marginBottom: 1
                                    }} />
                                    <View style={stylesBodyHome.containerTxtTitle}>
                                        <Text style={{ color: '#ffffff', fontSize: hp('2%'), textAlign: 'center', fontWeight: 'bold' }}>Em Bé</Text>
                                        <Text style={{ color: '#ffffff', fontSize: hp('2%'), textAlign: 'center' }}>{'<'}24 Tháng</Text>
                                    </View>
                                </View>
                                <View style={stylesBodyHome.btnNumber}>
                                    <Text style={stylesBodyHome.txtNumber}>0</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={{ height: hp('7%'), width: wp('95%'), borderRadius: 12, backgroundColor: '#f26222', marginTop: hp('2%') }}>
                        <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: hp('4%'), fontWeight: 'bold', marginTop: hp('0.5%') }}>TÌM KIẾM</Text>
                    </View>
                </TouchableOpacity>
            </View >
        )
    }
}
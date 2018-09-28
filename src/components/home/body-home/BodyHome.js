import React, { Component } from 'react';
import { stylesBodyHome } from './BodyHome.style'
import { View, Text, Image, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DataAirport, RelationshipAirport } from '../../../data-mock/data-mock'
import { MODAL_FROM, MODAL_TO } from '../../../constants/model-constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';
var mienBac = DataAirport.NoiDia.MienBac;
var mienTrung = DataAirport.NoiDia.MienTrung;
var mienNam = DataAirport.NoiDia.MienNam;
var dongNamA = DataAirport.QuocTe.DongNamA;
var dongBacA = DataAirport.QuocTe.DongBacA;
var chauAu = DataAirport.QuocTe.ChauAu;
var chauUc = DataAirport.QuocTe.ChauUc;
export default class BodyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationVN: true,
            typeModal: MODAL_FROM,
            modalVisible: false,
            onetrip: true,
            valueFrom: 'Hà Nội',
            valueTo: 'Sài Gòn',
            MSFrom: 'HAN',
            MSTo: 'SGN',
            dateFrom:new Date(),
            dateTo:new Date(),
            textSearch: '',
            isDateTimePickerVisible: false,
            isDateFrom : true
        }
    }
    _showDateTimePicker = (type) => {
        this.setState({ isDateTimePickerVisible: true })
        this.setState({isDateFrom:type})
    }

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        if(this.state.isDateFrom){
            this.setState({
                dateFrom:date
            });
        }else{
            this.setState({
                dateTo:date
            });
        }
        this._hideDateTimePicker();
    };
    renderModel() {
        if (this.state.typeModal === MODAL_FROM || this.state.typeModal === MODAL_TO) {
            return (
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={stylesBodyHome.containerHeaderModelLocation}>
                        <Text style={stylesBodyHome.txtTitleModel}>{this.state.typeModal === MODAL_FROM ? "Điểm Đi" : "Điểm Đến"}</Text>
                        <TouchableOpacity onPress={() => { this.setState({ modalVisible: false }) }} style={{ height: hp('5%'), marginLeft: wp('1%'), position: 'absolute', left: 0, marginTop: hp('1.5%') }}>
                            <Icon name="close" size={hp('5%')} color="#ffffff"></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesBodyHome.containerInputText}>
                        <Icon name="search" size={hp('5%')} color="#f26222" style={{ marginLeft: wp('1%') }} />
                        <TextInput underlineColorAndroid="transparent" style={stylesBodyHome.inputText} placeholder="Tìm Kiếm ..."></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                        <View style={{ alignItems: "center", width: wp('50%') }}>
                            <TouchableOpacity style={this.state.locationVN ? stylesBodyHome.btnOneTripOn : stylesBodyHome.btnOneTripOff} onPress={this.setLocationVN.bind(this, true)}>
                                <Text style={this.state.locationVN ? stylesBodyHome.txtOneTripOn : stylesBodyHome.txtOneTripOff}>Nội Địa</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", width: wp('50%') }}>
                            <TouchableOpacity style={!this.state.locationVN ? stylesBodyHome.btnOneTripOn : stylesBodyHome.btnOneTripOff} onPress={this.setLocationVN.bind(this, false)}>
                                <Text style={!this.state.locationVN ? stylesBodyHome.txtOneTripOn : stylesBodyHome.txtOneTripOff}>Quốc Tế</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ height: hp("70%"), width: wp("100%") }}>
                        <View style={{ flexDirection: 'column' }}>
                            {this.state.locationVN ? this.renderNoiDia(this.state.typeModal) : this.renderQuocTe(this.state.typeModal)}
                        </View>
                    </ScrollView>
                </View>
            )
        }
    }
    chooseLocation(type, Ten, Ma) {
        if (type === MODAL_FROM) {
            this.setState({
                valueFrom: Ten,
                MSFrom: Ma
            })
        } else {
            this.setState({
                valueTo: Ten,
                MSTo: Ma
            })
        }
        this.setState({
            modalVisible: false
        })
    }
    renderNoiDia(type) {
        renderND = []
        for (let mien in DataAirport.NoiDia) {
            for (let obj in DataAirport.NoiDia[mien]) {
                renderND.push(
                    <TouchableOpacity onPress={this.chooseLocation.bind(this, type, DataAirport.NoiDia[mien][obj].Ten, DataAirport.NoiDia[mien][obj].Ma)}>
                        <View style={{ flexDirection: 'column', height: hp('10%'), borderBottomColor: '#d2d2d2', borderBottomWidth: 1 }}>
                            <Text style={{ lineHeight: hp('5%'), fontSize: hp('3%') }}>{DataAirport.NoiDia[mien][obj].Ten}</Text>
                            <Text style={{ lineHeight: hp('5%'), fontSize: hp('2%') }}>{DataAirport.NoiDia[mien][obj].Ma}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        }
        return renderND;
    }
    renderQuocTe(type) {
        renderQT = []
        for (let mien in DataAirport.QuocTe) {
            for (let obj in DataAirport.QuocTe[mien]) {
                renderQT.push(
                    <TouchableOpacity onPress={this.chooseLocation.bind(this, type)}>
                        <View style={{ flexDirection: 'column', height: hp('10%'), borderBottomColor: '#d2d2d2', borderBottomWidth: 1 }}>
                            <Text style={{ lineHeight: hp('5%'), fontSize: hp('3%') }}>{DataAirport.QuocTe[mien][obj].Ten}</Text>
                            <Text style={{ lineHeight: hp('5%'), fontSize: hp('2%') }}>{DataAirport.QuocTe[mien][obj].Ma}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        }
        return renderQT;
    }
    setModalVisible(visible, typeModal) {
        this.setState({ modalVisible: visible });
        this.setState({ typeModal: typeModal })
    }
    setTypeTrip(type) {
        this.setState({
            onetrip: type
        })
    }
    setLocationVN(type) {
        this.setState({
            locationVN: type
        })
    }
    setChangeAroundTrip(){
        var valueFrom = this.state.valueFrom
        var MSFrom = this.state.MSFrom
        this.setState({
            valueFrom: this.state.valueTo,
            MSFrom: this.state.MSTo,
            valueTo:valueFrom,
            MSTo:MSFrom
        })
    }
    render() {
        console.log("aaaaaaaa")
        return (
            <View style={stylesBodyHome.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false)
                    }}>
                    {this.renderModel(this.state.typeModal)}
                </Modal>
                <View style={stylesBodyHome.containerFromTo}>
                    <TouchableOpacity style={{height: hp('6%'), width: hp('6%'), position: 'absolute', top: hp('12%'), left: wp('47.5%') - hp('3%'), zIndex: 10}} onPress={this.setChangeAroundTrip.bind(this)}>
                        <View style={{
                        height: hp('6%'), width: hp('6%')}}>
                            <Image source={require('../../../assets/icons/world.png')} resizeMode={'contain'} style={{
                                height: hp('6%'), width: hp('6%')
                            }} />
                        </View>
                    </TouchableOpacity>
                    <View style={stylesBodyHome.containerFrom}>
                        <TouchableOpacity style={this.state.onetrip ? stylesBodyHome.btnOneTripOn : stylesBodyHome.btnOneTripOff} onPress={this.setTypeTrip.bind(this, true)}>
                            <Text style={this.state.onetrip ? stylesBodyHome.txtOneTripOn : stylesBodyHome.txtOneTripOff}>Một Chiều</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true, MODAL_FROM); }}>
                            <View style={{ textAlign: 'center', alignItems: "center" }}>
                                <Text style={stylesBodyHome.txtTitle}>Điểm đi</Text>
                                <Text style={stylesBodyHome.txtMS}>{this.state.MSFrom}</Text>
                                <Text style={stylesBodyHome.txtTen}>{this.state.valueFrom}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesBodyHome.containerTo} >
                        <TouchableOpacity style={this.state.onetrip ? stylesBodyHome.btnOneTripOff : stylesBodyHome.btnOneTripOn} onPress={this.setTypeTrip.bind(this, false)}>
                            <Text style={this.state.onetrip ? stylesBodyHome.txtOneTripOff : stylesBodyHome.txtOneTripOn}>Khứ Hồi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true, MODAL_TO); }}>
                            <View style={{ textAlign: 'center', alignItems: "center" }}>
                                <Text style={stylesBodyHome.txtTitle}>Điểm đến</Text>
                                <Text style={stylesBodyHome.txtMS}>{this.state.MSTo}</Text>
                                <Text style={stylesBodyHome.txtTen}>{this.state.valueTo}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this._showDateTimePicker.bind(this,true)}>
                        <View style={stylesBodyHome.containerDateStart} >
                            <Text style={stylesBodyHome.txtTitleDate}>Ngày Đi</Text>
                            <Text style={stylesBodyHome.txtDate}>{Moment(this.state.dateFrom).format('DD/MM/YYYY')}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={this.state.onetrip} onPress={this._showDateTimePicker.bind(this,false)}>
                        <View style={stylesBodyHome.containerDateEnd}>
                            <Text style={!this.state.onetrip ? stylesBodyHome.txtTitleDate : stylesBodyHome.txtTitleDateOff}>Ngày Về</Text>
                            <Text style={!this.state.onetrip ? stylesBodyHome.txtDate : stylesBodyHome.txtDateOff}>{Moment(this.state.dateTo).format('DD/MM/YYYY')}</Text>
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
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    format='DD/MM/YYYY'
                    date={this.state.isDateFrom?this.state.dateFrom:this.state.dateTo}
                    minimumDate={this.state.isDateFrom?new Date():this.state.dateFrom}
                />
            </View>
        )
    }
}
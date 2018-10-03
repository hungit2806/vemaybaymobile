import React, { Component } from 'react';
import { stylesBodyHome } from './BodyHome.style'
import { View, Text, Image, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DataAirport, RelationshipAirport } from '../../../data-mock/data-mock'
import { MODAL_FROM, MODAL_TO, MODAL_MONTH_FROM, MODAL_MONTH_TO } from '../../../constants/model-constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';
import { Platform } from 'react-native';
import { Picker, DatePicker } from 'react-native-wheel-pick';

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
        var monthMoment = (Moment().month()+1)<12?(Moment().month()+1):(Moment().month()-11)
        
        this.state = {
            locationVN: true,
            typeModal: MODAL_FROM,
            modalVisible: false,
            onetrip: true,
            valueFrom: 'Hà Nội',
            valueTo: 'Sài Gòn',
            MSFrom: 'HAN',
            MSTo: 'SGN',
            dateFrom: new Date(),
            dateTo: new Date(),
            textSearch: '',
            isDateFrom: true,
            yearFrom: 'Năm '+Moment().year(),
            yearTo: 'Năm '+Moment().year(),
            monthFrom: 'Tháng '+monthMoment,
            monthTo: 'Tháng '+monthMoment,
            monthExactFrom:'',
            monthExactTo:''
        }
    }
    renderModel() {
        if (this.state.typeModal === MODAL_FROM || this.state.typeModal === MODAL_TO) {
            return (
                <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={stylesBodyHome.containerHeaderModelLocation}>
                        <Text style={stylesBodyHome.txtTitleModel}>{this.state.typeModal === MODAL_FROM ? "Điểm Đi" : "Điểm Đến"}</Text>
                        <TouchableOpacity onPress={() => { this.setState({ modalVisible: false }) }} style={{ height: hp('5%'), marginLeft: wp('1%'), position: 'absolute', left: 0, marginTop: hp('0.5%') }}>
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
                    <ScrollView style={{ height: hp("75%"), width: wp("100%") }}>
                        <View style={{ flexDirection: 'column' }}>
                            {this.state.locationVN ? this.renderNoiDia(this.state.typeModal) : this.renderQuocTe(this.state.typeModal)}
                        </View>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={stylesBodyHome.containerModalSelect}>
                    <View style={stylesBodyHome.containerModal}>
                        <View style={stylesBodyHome.containerHeaderModelLocation}>
                            <Text style={stylesBodyHome.txtTitleModalPerson}>{this.state.typeModal===MODAL_MONTH_FROM?"Chọn Tháng Đi":"Chọn Tháng Về"}</Text>
                            <TouchableOpacity onPress={() => { this.setState({ modalVisible: false }) }} style={{ height: hp('5%'), marginLeft: wp('1%'), position: 'absolute', left: 0, marginTop: hp('0.5%') }}>
                                <Icon name="close" size={hp('5%')} color="#ffffff"></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View >
                                <Picker
                                    style={{ backgroundColor: '#d2d2d2', height: wp('20%'), height: hp('20%') }}
                                    selectedValue={this.state.typeModal===MODAL_MONTH_FROM?this.state.yearFrom:this.state.yearTo}
                                    pickerData={['Năm 2018', 'Năm 2019', 'Năm 2020']}
                                    onValueChange={value => { this.state.typeModal === MODAL_MONTH_FROM ? this.setState({ yearFrom: value }) : this.setState({ yearTo: value }) }}
                                    itemSpace={30} // this only support in android
                                />
                                <Picker
                                    style={{ backgroundColor: '#d2d2d2', height: wp('20%'), height: hp('20%') }}
                                    selectedValue={this.state.typeModal===MODAL_MONTH_FROM?this.state.monthFrom:this.state.monthTo}
                                    pickerData={['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']}
                                    onValueChange={value => { this.state.typeModal === MODAL_MONTH_FROM ? this.setState({ monthFrom: value }) : this.setState({ monthTo: value }) }}
                                    itemSpace={30} // this only support in android
                                />
                            </View>
                        </View>
                        <Text style={{textAlign:"center",fontSize:hp('3%'),width:wp('80%'), marginTop:hp('3%')}}>
                            {this.state.typeModal === MODAL_MONTH_FROM ? this.state.monthFrom + ' ' + this.state.yearFrom : this.state.monthTo + ' ' + this.state.yearTo}
                        </Text>
                        <View style={{ alignItems: "center", width: wp('80%'), marginTop:hp('3%'), marginBottom:hp('3%') }}>
                            <TouchableOpacity style={stylesBodyHome.btnOneTripOn} onPress={this.setMonth.bind(this)}>
                                <Text style={stylesBodyHome.txtOneTripOn}>Xác Nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )

        }
    }
    setMonth(){
        if(this.state.typeModal === MODAL_MONTH_FROM){
            var month = this.state.monthFrom.split(' ')[1]
            var year = this.state.yearFrom.split(' ')[1]
            if(Number(month) < 10){
                month = '0'+month;
            }
            var monthFrom = Moment(month+'-'+year,'MM-YYYY').toDate();
            this.setState({
                dateFrom:monthFrom
            })
        }else{
            var month = this.state.monthTo.split(' ')[1]
            var year = this.state.yearTo.split(' ')[1]
            if(Number(month) < 10){
                month = '0'+month;
            }
            var monthTo = Moment(month+'-'+year,'MM-YYYY').toDate();
            this.setState({
                dateTo:monthTo
            })
        }
        this.setState({
            modalVisible: false
        })
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
    setChangeAroundTrip() {
        var valueFrom = this.state.valueFrom
        var MSFrom = this.state.MSFrom
        this.setState({
            valueFrom: this.state.valueTo,
            MSFrom: this.state.MSTo,
            valueTo: valueFrom,
            MSTo: MSFrom
        })
    }

    render() {

        return (
            <View style={stylesBodyHome.container}>
                <Modal
                    transparent
                    animationType="slide"
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false)
                    }}>
                    {this.renderModel(this.state.typeModal)}
                </Modal>
                <View style={stylesBodyHome.containerFromTo}>
                    <TouchableOpacity style={{ height: hp('6%'), width: hp('6%'), position: 'absolute', top: hp('12%'), left: wp('47.5%') - hp('3%'), zIndex: 10 }} onPress={this.setChangeAroundTrip.bind(this)}>
                        <View style={{
                            height: hp('6%'), width: hp('6%')
                        }}>
                            <Image source={require('../../../assets/icons/world.png')} resizeMode={'contain'} style={{
                                height: hp('6%'), width: hp('6%')
                            }} />
                        </View>
                    </TouchableOpacity>
                    <View style={stylesBodyHome.containerFrom}>
                        <TouchableOpacity onPress={() => { this.setModalVisible(true, MODAL_FROM); }}>
                            <View style={{ textAlign: 'center', alignItems: "center" }}>
                                <Text style={stylesBodyHome.txtTitle}>Điểm đi</Text>
                                <Text style={stylesBodyHome.txtMS}>{this.state.MSFrom}</Text>
                                <Text style={stylesBodyHome.txtTen}>{this.state.valueFrom}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesBodyHome.containerTo} >
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
                    <TouchableOpacity onPress={() => { this.setModalVisible(true, MODAL_MONTH_FROM); }}>
                        <View style={stylesBodyHome.containerDateStart} >
                            <Text style={stylesBodyHome.txtTitleDate}>Tháng Đi</Text>
                            <Text style={stylesBodyHome.txtDate}>{Moment(this.state.dateFrom).format('MM/YYYY')}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setModalVisible(true, MODAL_MONTH_TO); }}>
                        <View style={stylesBodyHome.containerDateEnd}>
                            <Text style={stylesBodyHome.txtTitleDate}>Tháng Về</Text>
                            <Text style={stylesBodyHome.txtDate}>{Moment(this.state.dateTo).format('MM/YYYY')}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={{ height: hp('7%'), width: wp('95%'), borderRadius: 12, backgroundColor: '#f26222', marginTop: hp('2%') }}>
                        <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: hp('4%'), fontWeight: 'bold', marginTop: hp('0.5%') }}>TÌM KIẾM</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}
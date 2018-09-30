import React, { Component } from 'react';
import { Image, StatusBar, View, Text, TouchableOpacity,WebView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import { stylesResultSearch } from './ResultSearch.style'

export default class ResultSearch extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        console.disableYellowBox = true;
        console.log('statusBarHeight: ', this.props.navigation.state.params);
        this.state = ({
            Loading:true
        })
    }

    render() {
        
        var URL = 'https://sbs.datacom.vn/FlightsDomestic.aspx?Request='+this.props.navigation.state.params+'&ProductKey=r1e0q6z8md6akul&FormType='
        console.log(URL)
        return (
            <View style={stylesResultSearch.container}>
                <View style={{ backgroundColor: 'rgba(242,98,34,0.7)', width: wp('100%'), height: hp('10%')}}>
                    <Text style={{ lineHeight: hp('10%'), textAlign: 'center', fontSize: hp('4%'), color: '#FFFFFF' }}>
                        Kết quả Tìm Kiếm
                </Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ height: hp('5%'), marginLeft: wp('1%'), position: 'absolute', left: 0, marginTop: hp('2.5%') }}>
                    <Icon name="arrow-left" size={hp('5%')} color="#ffffff"></Icon>
                </TouchableOpacity>
                <WebView
                    source={{uri: URL}}
                    style={stylesResultSearch.webView}
                    onLoad={() => this.onLoadedWebview()}
                />
                {this.state.Loading?<Image source={require('../../assets/icons/loading.gif')} resizeMode={'contain'} style={{ height: hp('20%'),width:hp('20%'), position: 'absolute', left: wp('30%'), top:hp('30%') }}></Image>:null}
            </View>

        );
    }
    onLoadingWebview(){
      
    }
    onLoadedWebview(){
        this.setState({
            Loading:false
        })
    }
}



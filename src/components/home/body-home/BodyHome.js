import React, { Component } from 'react';
import {stylesBodyHome} from './BodyHome.style'
import { View } from 'react-native';
export default class BodyHome extends Component{
    render(){
        return(
            <View style={stylesBodyHome.container}></View>
        )
    }
}
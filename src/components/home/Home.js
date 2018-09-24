import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
    static navigationOptions = {
        headerTitle: (
            <Image source={require('../../assets/logo/logo.png')} resizeMode={'contain'}  style={{ height:45 }}/>
        ),
    };
    render() {
        return (
            <View>
                <Text>Welcome to React Native!</Text>
            </View>
        );
    }
}



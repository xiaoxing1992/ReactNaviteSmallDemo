import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    WebView,
    View
} from 'react-native';

import Header from './header';

var CustomWebView = React.createClass({
    render() {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName: this.props.backName,
                        barTitle: this.props.barTitle
                    }}
                />
                <WebView
                    startInLoadingState={true}
                    contentInset={{top: -44, bottom: -120}}
                    source={{uri: this.props.url}}
                />
            </View>
        )
    }
});
module.exports = CustomWebView;
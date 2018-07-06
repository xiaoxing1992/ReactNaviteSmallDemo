import React, {Component} from 'react';
import {
    Dimensions,
    ActivityIndicator
} from 'react-native';

var Util = {
    windowSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    getRequest: function (url, successCallback, failCallback) {
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => successCallback(responseData))
            .catch((error) => failCallback(error));
    },

    loading: <ActivityIndicator style={{marginTop: 200}}/>
};
module.exports = Util;
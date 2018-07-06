
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {SearchBar} from "./searchBar";

var Icon = React.createClass({
    render() {
        return (
            <View>
                <View style={styles.go}>

                </View>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    go: {
        width: 15,
        height: 15,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#fff',
        marginLeft: 10,
        transform: [{rotate: '45deg'}]
    },
});

module.exports = Icon;
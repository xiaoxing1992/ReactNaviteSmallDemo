import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Image,
    ScrollView,
    ListView,
    Alert,
    TouchableOpacity,
    View
} from 'react-native';

import Header from './../common/header';
import BookItem from './book_item';
import Util from './../common/util';
import ServiceUtil from './../common/service';


var BookDetail = React.createClass({
    getInitialState() {
        return {
            bookData: null
        }
    },
    getData() {
        var that = this;
        var url = ServiceUtil.book_detail_id + this.props.bookID;
        Util.getRequest(url, function (data) {
            that.setState({
                bookData: data
            });
        }, function (error) {
            Alert.alert(error+'')
        });
    },

    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.bookData ?
                        <View>
                            <Header
                                initObj={{backName: '图书', barTitle: this.state.bookData.title}}
                                navigator={this.props.navigator}
                            />
                            <BookItem book={this.state.bookData}/>
                            <View>
                                <Text style={styles.title}>图书简介</Text>
                                <Text style={styles.text}>{this.state.bookData.summary}</Text>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={styles.title}>作者简介</Text>
                                <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                            </View>
                            <View style={{height: 60}}></View>
                        </View> : Util.loading
                }
            </ScrollView>
        )
    },
    componentDidMount() {
        this.getData();
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10,
        fontWeight: 'bold',

    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: '#000D22'
    }
});

module.exports = BookDetail;
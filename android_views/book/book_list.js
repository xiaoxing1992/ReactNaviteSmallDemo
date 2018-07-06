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

import Util from './../common/util';
import SearchBar from './../common/searchBar';
import ServiceURL from './../common/service';
import BookItem from './book_item';
import BookDetail from './book_detail';

var BookList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        return {
            dataSource: ds,
            show: false,
            keywords: 'Android'
        };
    },
    getData() {
        this.setState({
            show: false,
        });

        let that = this;
        let url = ServiceURL.book_search + '?count=20&q=' + this.state.keywords;
        Util.getRequest(url, function (data) {
            if (!data.books || data.books.length === 0) {
                return Alert.alert("未查询到相关数据")
            }
            var ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });

            that.setState({
                show: true,
                dataSource: ds.cloneWithRows(data.books)
            });
        }, function (error) {
            Alert.alert(error + "");
        })
    },
    _changeText: function (text) {
        this.setState({
            keywords: text
        });
    },
    _searchPress: function () {
        this.getData();
    },

    _showDetail(bookID) {
        var detailRoute = {
            component: BookDetail,
            passProps: {
                bookID: bookID
            }
        };

        this.props.navigator.push(detailRoute);
    },

    render() {
        return (
            <ScrollView>
                <SearchBar placeholder="请输入图书的名称" onPress={this._searchPress}
                           onChangeText={this._changeText}/>
                {
                    this.state.show ? <ListView
                        dataSource={this.state.dataSource}
                        initialListSize={10}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeperator}
                    /> : Util.loading
                }
            </ScrollView>
        )
    },
    componentDidMount() {
        this.getData();
    },

    _renderRow(book) {
        return <BookItem book={book} onPress={this._showDetail.bind(this, book.id)}/>
    },
    _renderSeperator(sectionID, rowID) {
        let style = {height: 1, backgroundColor: '#CCCCCC'};
        return <View style={style} key={sectionID + rowID}/>
    },
});


module.exports = BookList;
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Image,
    Alert,
    ScrollView,
    TouchableOpacity,
    View, ListView
} from 'react-native';

import Util from './../common/util';
import SearchBar from './../common/searchBar';
import ServiceURL from './../common/service';
import MovieItem from './movie_item';
import MovieWebView from './../common/customWebView';


var MovieList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        return {
            dataSource: ds,
            show: false,
            keywords: '钢铁侠'
        };
    },

    getData() {
        this.setState({
            show: false
        });

        let that = this;
        let url = ServiceURL.movie_search + '?count=20&q=' + this.state.keywords;
        Util.getRequest(url, function (data) {
            if (!data.subjects || data.subjects.length === 0) {
                Alert.alert('未查询到相关数据')
            }

            var ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });

            that.setState({
                show: true,
                dataSource: ds.cloneWithRows(data.subjects)
            });
        }, function (error) {
            Alert.alert(error + "");
        })
    },

    _showDetail(title, url) {
        var detailRoute = {
            component: MovieWebView,
            passProps: {
                backName: '电影',
                barTitle:title,
                title: title,
                url: url,
            }
        };

        this.props.navigator.push(detailRoute);
    },
    _searchPress() {
        this.getData();
    },
    _changeText(text) {
        this.setState({
            keywords: text
        });
    },
    render() {
        return (
            <ScrollView>
                <SearchBar placeholder="请输入电影的名称" onPress={this._searchPress}
                           onChangeText={this._changeText}/>
                {
                    this.state.show ?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeperator}
                        />
                        : Util.loading
                }
            </ScrollView>
        )
    },
    componentDidMount() {
        this.getData();
    },
    _renderRow(movie) {
        return <MovieItem movie={movie} onPress={this._showDetail.bind(this, movie.title, movie.alt)}/>
    },
    _renderSeperator(sectionID, rowID) {
        let style = {height: 1, backgroundColor: '#CCCCCC'};
        return <View style={style} key={sectionID + rowID}/>
    }
});

module.exports = MovieList;
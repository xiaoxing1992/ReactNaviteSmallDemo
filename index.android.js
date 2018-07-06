/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    StatusBar,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import BookList from './android_views/book/book_list';
import MovieList from './android_views/movie/movie_list';
import Navigation from './android_views/common/navigation';

StatusBar.setHidden(true);
var ReadBook = React.createClass({
    getInitialState() {
        return {
            selectedTab: "图书"
        }
    },

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '图书'}
                    title="图书"
                    renderIcon={() => <Image style={{width: 22, height: 22}}
                                             source={require('./react_native_images/home.png')}/>}
                    renderSelectedIcon={() => <Image style={{width: 22, height: 22}}
                                                     source={require('./react_native_images/home.png')}/>}
                    onPress={() => this.setState({selectedTab: '图书'})}>
                    <Navigation component={BookList}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === '电影'}
                    title="电影"
                    renderIcon={() => <Image style={{width: 22, height: 22}}
                                             source={require('./react_native_images/tb_mine_click.png')}/>}
                    renderSelectedIcon={() => <Image style={{width: 22, height: 22}}
                                                     source={require('./react_native_images/tb_mine_click.png')}/>}
                    onPress={() => this.setState({selectedTab: '电影'})}>
                    <Navigation component={MovieList}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
});

AppRegistry.registerComponent('ReadBook', () => ReadBook);

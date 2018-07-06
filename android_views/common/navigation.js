import React, {Component} from 'react';

import {
    Navigator,
    View
} from 'react-native';

var Navigation = React.createClass({
    render() {
        var rootRoute = {
          component:this.props.component,
          passProps:{

          }
        };
        return (
            <Navigator
                initialRoute={rootRoute}
                configureScene={()=>{
                    return Navigator.SceneConfigs.PushFromRight
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    return(
                        <View style={{flex:1}}>
                            <Component
                                navigator={navigator}
                                route={route}
                                {...route.passProps}
                            />
                        </View>
                    );
                }}
            />
        )
    }
});

module.exports = Navigation;
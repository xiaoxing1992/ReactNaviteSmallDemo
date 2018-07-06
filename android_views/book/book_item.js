import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

var BookItem = React.createClass({
    render () {
        var book = this.props.book;

        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: book.image}}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.pages}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 120,
        padding: 10,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 100,
    },
    contentContainer: {
        flex: 1,
        marginLeft: 15,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',

    },
    publisher_author: {
        color: '#A3A3A3',
        fontSize: 13,

    },
    price: {
        color: '#2BB2A3',
        fontSize: 16,
    },
    pages: {
        marginLeft: 10,
        color: '#A7A0A0'
    }
});

module.exports = BookItem;
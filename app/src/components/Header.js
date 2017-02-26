/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default class Header extends Component {
  
    constructor() {
       super();
       
    }

    render() {
        var menuIcon = require("../../res/menu-icon/menu-icon.png")
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.title}> Expenses </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 15,
        paddingTop: 15,
        backgroundColor: "#28B595"
    },
    container: {
        
    },
    title: {
        color: "#ffffff",
        fontFamily: "Myriad Pro",
        fontWeight: "bold",
        marginLeft: 14,
        fontSize: 18
    },
    menuIcon: {
    }
});

AppRegistry.registerComponent('Header', () => Header);

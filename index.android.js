/**
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, AppState, StyleSheet, Text, View, Dimensions, TouchableNativeFeedback, Image, Modal, TouchableHighlight} from 'react-native';
import Event from 'react-native-simple-events';
import Header from "./app/src/components/Header"
import StickyButton from "./app/src/components/StickyButton"
import ExpenseListView from "./app/src/components/ExpenseListView"

export default class MyExpenseTracker extends Component {

    constructor() {
        super();
        this.state = {
          addModalVisible: false,
          modalVisible : false
        };
    }

    onPressAdd() {

    }

    componentWillMount() {
        console.log("Component will mount...")
        Event.on('add-new-item','', (data) => {
            console.log("Adding new item...")
        })
    }

    componentWillUnmount() { 
        Event.rm('add-new-item', '') 
    }

    componentDidMount() {
        
    }

    handleAppStateChange() {

    }

    render() {
        var {width, height} = Dimensions.get('window')
        var addIcon = require("./app/res/add-icon/add-icon.png")

        return (
            <View style={styles.container}>
                <Header/>
                <ExpenseListView/>
                <StickyButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    }
});

AppRegistry.registerComponent('MyExpenseTracker', () => MyExpenseTracker);

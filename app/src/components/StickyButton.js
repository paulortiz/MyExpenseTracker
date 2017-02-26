/**
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Event from 'react-native-simple-events';
import {AppRegistry, AppState, StyleSheet, Text, View, Dimensions, TouchableNativeFeedback, Image} from 'react-native';

export default class StickyButton extends Component {
  
    constructor() {
        super();
        this.state = {testing: false};
    }

    onPressAdd() {
        console.log("Adding new item....")
        Event.trigger('add-new-item', '')
    }

    render() {
        var {width, height} = Dimensions.get('window')
        var addIcon = require("../../res/add-icon/add-icon.png")

        return (
            <View style={styles.container} width={width}>
                <TouchableNativeFeedback 
                    onPress={this.onPressAdd} 
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={addIcon} style={styles.addButton}/>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'center',
        position: "absolute",
        bottom: 0,
    },
    addButton: {
        marginBottom: 15
    }
});

AppRegistry.registerComponent('StickyButton', () => StickyButton);

/**
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Event from 'react-native-simple-events';
import {AppRegistry, AppState, StyleSheet, Text, View, Dimensions, TouchableNativeFeedback, Image} from 'react-native';

export default class AddOrUpdateView extends Component {
  
    constructor() {
        super();
        this.state = {testing: false};
    }

    onPressAdd() {
        console.log("Adding new item....")
        Event.trigger('add-new-item', '')
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal animationType={"slide"} transparent={true} visible={this.state.modalVisible}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                            <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => {
                  this.setModalVisible(true)
                }}>
                  <Text>Show Modal</Text>
                </TouchableHighlight>
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

AppRegistry.registerComponent('AddOrUpdateView', () => AddOrUpdateView);

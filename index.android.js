/**
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Event from 'react-native-simple-events';
import Header from "./app/src/components/Header"
import ExpenseListView from "./app/src/components/ExpenseListView"
import {
    AppRegistry, 
    AppState, 
    StyleSheet, 
    Text, 
    View, 
    Dimensions, 
    TouchableNativeFeedback, 
    Image, 
    Modal, 
    TouchableHighlight, 
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';

export default class MyExpenseTracker extends Component {

    constructor(props) {
        super(props);
        this.state = {
          addModalVisible: false
        };
    }

    onPressAdd() {

    }

    componentWillMount() {
        console.log("Component will mount...")
        console.log("state : " + this.state.addModalVisible)
        Event.on('add-new-item','', this.openAddOrUpdateModal)
    }

    openAddOrUpdateModal(e) {
        this.setState({addModalVisible : true})
    }

    componentWillUnmount() { 
        Event.rm('add-new-item', '') 
        console.log("state : " + this.state.addModalVisible)
    }

    componentDidMount() {
        
    }

    handleAppStateChange() {

    }

    render() {
        var {width, height} = Dimensions.get('window')
        var iconAdd = require("./app/res/icon-add/icon-add.png")
        var iconModalClose = require("./app/res/icon-close/icon-close.png")
        var iconAddItem = require("./app/res/icon-ok/icon-ok.png")
        var iconClear = require("./app/res/icon-clear/icon-clear.png")

        return (
            <View style={styles.container}>
                <Header/>
                <ExpenseListView/>

                {/* Add Button*/}
                <View style={styles.bottomContainer} width={width}>
                    <TouchableNativeFeedback 
                        onPress={this.openAddOrUpdateModal.bind(this)} 
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <Image source={iconAdd} style={styles.addButton}/>
                    </TouchableNativeFeedback>
                </View>
                
                {/* Modal View for Adding New Entry*/}
                <Modal 
                    transparent={true}
                    visible={this.state.addModalVisible} 
                    onRequestClose={()=>{console.log("closing...")}}>
                    <View style={{backgroundColor : 'rgba(0, 0, 0, 0.5)'}} width={width} height={height}>
                        {/* Popup View */}
                        <View style={styles.modalContainer} width={width}>
                            <View style={styles.addView} width={width * 0.90} height={height * 0.35}>
                                {/* Close Button */}
                                <TouchableHighlight onPress={() => { this.setState({addModalVisible: false})}} style={styles.iconModalClose}>
                                    <Image source={iconModalClose}/>
                                </TouchableHighlight>
                                
                                {/* Input Containers */}
                                <View style={styles.inputContainer}>
                                    <TextInput style={styles.textInput} placeholder="Please enter expense title" />
                                    <TextInput style={styles.textInput} placeholder="Please enter amount"/>
                                </View>

                                {/* Buttons */}
                                <View style={styles.modalButtonContainer}>
                                     <TouchableHighlight onPress={() => {}} underlayColor="#ffffff">
                                        <Image source={iconClear} style={{marginRight: 20}}/>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={() => {}} underlayColor="#ffffff">
                                        <Image source={iconAddItem} style={{marginRight: 20}}/>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View>
                                <Image source={require("./app/res/icon-down-triangle-white/icon-down-triangle-white.png")} />
                            </View>
                        </View>

                    </View>
                </Modal>
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
    },
    bottomContainer : {
        alignItems:'center',
        justifyContent:'center',
        position: "absolute",
        bottom: 0,
    },
    addButton: {
        marginBottom: 15
    },
    modalContainer: {
        alignItems: "center",              
        position: "absolute",
        bottom: 100
    },
    addView: {
        backgroundColor: "#ffffff",
        bottom: 0
    },
    iconModalClose: {
        right: 20,
        position: "absolute",
        marginTop: 16
    },
    inputContainer: {
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15
    },
    textInput: {
        borderColor: "#D6D6D6"
    },
    modalButtonContainer: {
        flex: 1, 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    }
});

AppRegistry.registerComponent('MyExpenseTracker', () => MyExpenseTracker);

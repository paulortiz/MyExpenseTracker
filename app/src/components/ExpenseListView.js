/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Event from 'react-native-simple-events';
import {AppRegistry, StyleSheet, View, Text, ScrollView, TouchableHighlight, ListView, AsyncStorage} from 'react-native';

export default class ExpenseListView extends Component {
    
    
    constructor(props) {
       super(props);       
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
            dataSource: ds,
        };
    
    }

    getData() {
        const CACHE_NAME = "@expenses-cache"
        try {
            var cache = AsyncStorage.getItem(CACHE_NAME, (error, result) => {
                var temp = []
                if (result !== null) {
                    var dump =  JSON.parse(result);
                    console.log(dump)
                    this.setState({dataSource: this.state.dataSource.cloneWithRows(dump)})
                }
            })
        } catch (err) {
            console.log("@@@ error getting cache :: " + err)
        }
    }

    componentWillMount() {
        
        Event.on('update-expense-list', '', this.handleUpdateList.bind(this))
    }

    handleUpdateList(data) {        
        this.setState({dataSource: this.state.dataSource.cloneWithRows(data)})
    }

    componentDidMount() {
        this.getData()
    }

    handleAppStateChange() {

    }

    renderRow(rowData, sectionID, rowID) {
        var data = rowData
        var date = new Date(data.date)
        var today = new Date()
        var time = ""
        var month = date.getMonth()
        var day = date.getDay()
        var year = date.getFullYear()
        var hour = date.getHours()
        var min = date.getMinutes()

        if (today.toDateString() == date.toDateString()) {
            time = hour + ":" + min
        } else {
            time = day + "/" + month + "/" + year + " " + hour + ":" + min
        }
        return(
            <ExpenseView title={data.title} time={time} amount={data.amount}/>
        );
    }

    render() {
        var updateData = this.props.updateData;
        if (updateData) {
            console.log("update data? " + updateData)
            this.getData()
        }
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

class ExpenseView extends Component {
  
    constructor() {
       super();
    }

    didTapExpense() {
        
    }

    render() {
        return (
            <TouchableHighlight style={styles.expenseView} onPress={this.didTapExpense}>
                <View style={styles.container}>
                    <View style={styles.left}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.time}>{this.props.time}</Text>                    
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.amount}>S${this.props.amount}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    expenseView: {
    },
    container: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "#ffffff",
        borderBottomColor: '#D6D6D6',
        borderBottomWidth: 1
    },    
    left: {
        flex: 6
    },
    right: {
        flex: 2
    },
    title : {
        marginLeft: 18,
        fontSize: 18
    },
    time: {
        marginLeft: 18,
        fontSize: 12,
        color: "#BBBBBB"
    },
    amount: {
        right: 25,
        position: "absolute",
        fontSize: 20,
        color: "#FF0606"
    }
});

AppRegistry.registerComponent('ExpenseListView', () => ExpenseListView);
